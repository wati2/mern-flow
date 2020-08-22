import express from "express"
const app = express()

import { postSchemaModel } from "../database/mongo_schema/index.js"

// Post 목록 조회
app.get("/", async (req, res) => {
  try {
    const getAllPosts = await postSchemaModel.find({})
    res.json(getAllPosts)
  } catch (e) {
    console.log(e)
    res.send("error")
  }
})

// 새로운 Post, 글 생성
app.post("/", async (req, res) => {
  const addNewPost = new postSchemaModel({
    content: req.body.content,
    author: req.body.author,
  })

  try {
    const result = await addNewPost.save()
    res.json(result)
  } catch (e) {
    console.log(e)
  }
})

// post의 _id 전달 받음, 해당 post 찾음, 해당 post에 comment push 함
app.post("/addComment", async (req, res) => {
  try {
    const _id = req.body._id
    const author = req.body.author
    const content = req.body.content
    const comment = { author: author, content: content }
    // returns Query
    await postSchemaModel.findOneAndUpdate(
      { _id: _id },
      { $push: { comments: comment } }
    )
    res.send(`add comment & Updated _id: ${_id}`)
  } catch (e) {
    console.log(e)
  }
})

export default app
