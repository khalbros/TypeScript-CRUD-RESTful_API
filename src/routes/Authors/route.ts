import express from "express"
import controller from "./controller"
const router = express.Router()

router.get("/get", controller.getAuthors)
router.get("/get/:authorID", controller.getAuthorByID)
router.post("/create", controller.addAuthors)
router.patch("/edit/:authorID", controller.editAuthor)
router.delete("/delete/:authorID", controller.deleteAuthor)

export default router
