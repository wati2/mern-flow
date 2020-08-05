const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

// exports
module.exports = {
  commentSchema: mongoose.model("Comment", commentSchema),
  commentSchemaModel: commentSchema,
}
