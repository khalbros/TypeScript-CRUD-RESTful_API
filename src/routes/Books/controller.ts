import {Request, Response} from "express"
import Books from "../../models/Books.model"

const getBooks = (req: Request, res: Response) => {
  try {
    return Books.find()
      .populate("author")
      .select("-__v")
      .then((books) => res.status(200).json(books))
      .catch((err) => res.status(500).json({Message: err.message}))
  } catch (error) {
    res.status(500).json(error)
  }
}

const getBookByID = (req: Request, res: Response) => {
  const _id = req.params.bookID
  try {
    return Books.findById(_id)
      .populate("author")
      .then((book) =>
        book
          ? res.status(200).json(book)
          : res.status(400).json({Message: "Book with such ID not Found"})
      )
      .catch((err) => res.status(500).json(err.message))
  } catch (error) {
    res.status(500).json(error)
  }
}

const addBook = (req: Request, res: Response) => {
  const {title, author} = req.body
  try {
    if (title && author) {
      const newBook = new Books({title, author})
      return newBook
        .save()
        .then((newbook) => res.status(201).json(newbook))
        .catch((err) => res.status(400).json({Message: err.message}))
    }
    return res.status(400).json({Message: "Invalid Entries"})
  } catch (error) {
    res.status(500).json(error)
  }
}
const editBook = (req: Request, res: Response) => {
  const _id = req.params.bookID
  try {
    const newBook = Books.findByIdAndUpdate(_id)
      .then((book) => {
        if (book) {
          book.set(req.body)
          return book
            .save()
            .then((book) => res.status(202).json(book))
            .catch((err) => res.status(500).json(err.message))
        } else {
          res.status(400).json({Messsage: "No book with such ID Found"})
        }
      })
      .catch((err) => res.status(500).json(err))
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteBook = (req: Request, res: Response) => {
  const _id = req.params.bookID
  try {
    return Books.findOneAndDelete({_id})
      .then((book) =>
        book
          ? res.status(200).json({Message: `${book?.title} Deleted`})
          : res.status(400).json({Message: "No Book with Such ID"})
      )
      .catch((err) => res.status(500).json(err.message))
  } catch (error) {
    res.status(500).json({Message: error})
  }
}

export default {
  getBooks,
  getBookByID,
  addBook,
  editBook,
  deleteBook,
}
