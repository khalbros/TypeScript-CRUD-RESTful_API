import express from "express"
import {resourceLimits} from "worker_threads"
import controller from "./controller"

const route = express.Router()

route.post("/create", controller.addBook)
route.get("/get", controller.getBooks)
route.get("/get/:bookID", controller.getBookByID)
route.patch("/edit/:bookID", controller.editBook)
route.delete("/delete/:bookID", controller.deleteBook)

export default route
