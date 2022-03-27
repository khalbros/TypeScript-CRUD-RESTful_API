"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Books_model_1 = __importDefault(require("../../models/Books.model"));
const getBooks = (req, res) => {
    try {
        return Books_model_1.default.find()
            .populate("author")
            .select("-__v")
            .then((books) => res.status(200).json(books))
            .catch((err) => res.status(500).json({ Message: err.message }));
    }
    catch (error) {
        res.status(500).json(error);
    }
};
const getBookByID = (req, res) => {
    const _id = req.params.bookID;
    try {
        return Books_model_1.default.findById(_id)
            .populate("author")
            .then((book) => book
            ? res.status(200).json(book)
            : res.status(400).json({ Message: "Book with such ID not Found" }))
            .catch((err) => res.status(500).json(err.message));
    }
    catch (error) {
        res.status(500).json(error);
    }
};
const addBook = (req, res) => {
    const { title, author } = req.body;
    try {
        if (title && author) {
            const newBook = new Books_model_1.default({ title, author });
            return newBook
                .save()
                .then((newbook) => res.status(201).json(newbook))
                .catch((err) => res.status(400).json({ Message: err.message }));
        }
        return res.status(400).json({ Message: "Invalid Entries" });
    }
    catch (error) {
        res.status(500).json(error);
    }
};
const editBook = (req, res) => {
    const _id = req.params.bookID;
    try {
        const newBook = Books_model_1.default.findByIdAndUpdate(_id)
            .then((book) => {
            if (book) {
                book.set(req.body);
                return book
                    .save()
                    .then((book) => res.status(202).json(book))
                    .catch((err) => res.status(500).json(err.message));
            }
            else {
                res.status(400).json({ Messsage: "No book with such ID Found" });
            }
        })
            .catch((err) => res.status(500).json(err));
    }
    catch (error) {
        res.status(500).json(error);
    }
};
const deleteBook = (req, res) => {
    const _id = req.params.bookID;
    try {
        return Books_model_1.default.findOneAndDelete({ _id })
            .then((book) => book
            ? res.status(200).json({ Message: `${book === null || book === void 0 ? void 0 : book.title} Deleted` })
            : res.status(400).json({ Message: "No Book with Such ID" }))
            .catch((err) => res.status(500).json(err.message));
    }
    catch (error) {
        res.status(500).json({ Message: error });
    }
};
exports.default = {
    getBooks,
    getBookByID,
    addBook,
    editBook,
    deleteBook,
};
