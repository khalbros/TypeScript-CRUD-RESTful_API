import express, {Request, Response, Application} from "express"
const app: Application = express()
import cors from "cors"
import morgan from "morgan"
import authorsRoute from "./routes/Authors/route"
import booksRoute from "./routes/Books/route"

app.use(cors())
app.use(express.json())
app.use(morgan("combined"))

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Express TypeScript")
})

app.use("/authors", authorsRoute)
app.use("/books", booksRoute)

export default app
