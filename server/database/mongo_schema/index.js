const postSchema = require("./postSchema")
const { commentSchema, commentSchemaModel } = require("./commentSchema")
const userSchema = require("./userSchema")

module.exports = {
  Post: postSchema,
  Comment: commentSchema,
  CommentModel: commentSchemaModel,
  User: userSchema,
}
