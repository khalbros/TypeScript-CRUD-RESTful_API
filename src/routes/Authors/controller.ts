import {Request, Response, NextFunction} from "express"
import Author from "../../models/Authors.model"

const getAuthors = (req: Request, res: Response) => {
  try {
    return Author.find()
      .then((author) => {
        res.status(200).json({author})
      })
      .catch((err) => {
        res.status(400).json(err)
      })
  } catch (error) {
    console.error(error)
  }
}
const getAuthorByID = (req: Request, res: Response) => {
  const _id = req.params.authorID
  try {
    return Author.findById(_id)
      .then((author) => {
        author
          ? res.status(200).json({author})
          : res.status(400).json({Message: "Not Found"})
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  } catch (error) {
    console.error(error)
  }
}
const addAuthors = (req: Request, res: Response) => {
  const {name} = req.body
  try {
    return new Author({name})
      .save()
      .then((author) => res.status(201).json({author}))
      .catch((err) => res.status(400).json(err))
  } catch (error) {
    console.error(error)
  }
}
const editAuthor = (req: Request, res: Response) => {
  const {name} = req.body
  const _id = req.params.authorID
  try {
    return Author.findByIdAndUpdate(_id)
      .then((author) => {
        if (author) {
          author.set({name})
          return author
            .save()
            .then((author) => res.status(201).json({author}))
            .catch((err) => res.status(500).json(err))
        } else {
          res.status(400).json({Message: "No Such Author Found"})
        }
      })
      .catch((err) => res.status(500).json(err))
  } catch (error) {
    console.error(error)
  }
}
const deleteAuthor = (req: Request, res: Response) => {
  const _id = req.params.authorID
  try {
    return Author.findByIdAndDelete(_id)
      .then((author) => {
        if (author) {
          res.status(200).json({Message: `Deleted ${author._id}`})
        } else {
          res.status(400).json({Message: `No Such ID Found`})
        }
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  } catch (error) {
    console.error(error)
  }
}

export default {getAuthors, getAuthorByID, editAuthor, addAuthors, deleteAuthor}
