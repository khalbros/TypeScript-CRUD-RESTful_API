"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const route = express_1.default.Router();
route.post("/create", controller_1.default.addBook);
route.get("/get", controller_1.default.getBooks);
route.get("/get/:bookID", controller_1.default.getBookByID);
route.patch("/edit/:bookID", controller_1.default.editBook);
route.delete("/delete/:bookID", controller_1.default.deleteBook);
exports.default = route;
