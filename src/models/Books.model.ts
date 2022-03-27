import mongoose, {Schema, Document} from "mongoose"
import {IAuthor} from "./Authors.model"

export interface IBook {
  name: string
  author: IAuthor
}

export interface IBookModel extends IBook, Document {}

const BookSchema: Schema = new Schema(
  {
    name: {type: String, required: true},
    author: {type: String, ref: "author"},
  },
  {
    timestamps: true,
  }
)

export default mongoose.model<IBookModel>("book", BookSchema)
