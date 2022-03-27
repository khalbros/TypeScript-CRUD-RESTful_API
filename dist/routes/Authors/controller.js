"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Authors_model_1 = __importDefault(require("../../models/Authors.model"));
const getAuthors = (req, res) => {
    try {
        return Authors_model_1.default.find()
            .then((author) => {
            res.status(200).json({ author });
        })
            .catch((err) => {
            res.status(400).json(err);
        });
    }
    catch (error) {
        console.error(error);
    }
};
const getAuthorByID = (req, res) => {
    const _id = req.params.authorID;
    try {
        return Authors_model_1.default.findById(_id)
            .then((author) => {
            author
                ? res.status(200).json({ author })
                : res.status(400).json({ Message: "Not Found" });
        })
            .catch((err) => {
            res.status(500).json(err);
        });
    }
    catch (error) {
        console.error(error);
    }
};
const addAuthors = (req, res) => {
    const { name } = req.body;
    try {
        return new Authors_model_1.default({ name })
            .save()
            .then((author) => res.status(201).json({ author }))
            .catch((err) => res.status(400).json(err));
    }
    catch (error) {
        console.error(error);
    }
};
const editAuthor = (req, res) => {
    const { name } = req.body;
    const _id = req.params.authorID;
    try {
        return Authors_model_1.default.findByIdAndUpdate(_id)
            .then((author) => {
            if (author) {
                author.set({ name });
                return author
                    .save()
                    .then((author) => res.status(201).json({ author }))
                    .catch((err) => res.status(500).json(err));
            }
            else {
                res.status(400).json({ Message: "No Such Author Found" });
            }
        })
            .catch((err) => res.status(500).json(err));
    }
    catch (error) {
        console.error(error);
    }
};
const deleteAuthor = (req, res) => {
    const _id = req.params.authorID;
    try {
        return Authors_model_1.default.findByIdAndDelete(_id)
            .then((author) => {
            if (author) {
                res.status(200).json({ Message: `Deleted ${author._id}` });
            }
            else {
                res.status(400).json({ Message: `No Such ID Found` });
            }
        })
            .catch((err) => {
            res.status(500).json(err);
        });
    }
    catch (error) {
        console.error(error);
    }
};
exports.default = { getAuthors, getAuthorByID, editAuthor, addAuthors, deleteAuthor };
