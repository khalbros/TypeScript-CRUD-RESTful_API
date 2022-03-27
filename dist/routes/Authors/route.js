"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const router = express_1.default.Router();
router.get("/get", controller_1.default.getAuthors);
router.get("/get/:authorID", controller_1.default.getAuthorByID);
router.post("/create", controller_1.default.addAuthors);
router.patch("/edit/:authorID", controller_1.default.editAuthor);
router.delete("/delete/:authorID", controller_1.default.deleteAuthor);
exports.default = router;
