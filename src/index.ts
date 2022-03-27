import http, {Server} from "http"
import "dotenv/config"
import mongoose from "mongoose"
import {PORT, DB_URL} from "./config"
import app from "./app"

const server: Server = http.createServer(app)

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log(`DataBase Connected`)
    startServer()
  })
  .catch((err) => {
    console.error(err)
  })

function startServer(): void {
  server.listen(PORT, () => {
    console.log(`Server Running On PORT:${PORT}`)
  })
}
