import mongoose from "mongoose"

const commentSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    content: { type: String, required: true },
    replyTo: { typle: String, default: "" },
  },
  {
    timestamps: true,
  }
)

const commentSchemaModel = mongoose.model("Comment", commentSchema)

export { commentSchemaModel, commentSchema }
