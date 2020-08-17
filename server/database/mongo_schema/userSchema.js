import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: String,
  username: { type: String, required: true },
  password: { type: String, required: true },
})

const userSchemaModel = mongoose.model("User", userSchema)

export default userSchemaModel
