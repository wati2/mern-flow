import express from "express"
const app = express()

import {
  postSchemaModel,
  commentSchemaModel,
} from "../database/mongo_schema/index.js"

// Post 목록 조회
app.get("/", async (req, res) => {
  try {
    const getAllPosts = await postSchemaModel.find({}).exec()
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
    await postSchemaModel
      .findOneAndUpdate({ _id: _id }, { $push: { comments: comment } })
      .exec()
    console.log(`add comment & Updated _id: ${_id}`)
    res.send(`add comment & Updated _id: ${_id}`)
  } catch (e) {
    console.log(e)
  }
})

// post의 _id 전달 받음, 해당 post 찾음, Delete 진행
app.delete("/:_id", async (req, res) => {
  try {
    const _id = req.params._id
    await postSchemaModel.deleteOne({ _id: _id }).exec()
    // Res
    console.log(` [mern-flow] # delete post successfully, _id: ${_id}`)
    res.send(` [mern-flow] # delete post successfully, _id: ${_id}`)
  } catch (error) {
    console.log(error)
    // Res
    console.log(` [mern-flow] # delete post Failed, _id: ${_id}`)
    res.send(` [mern-flow] # delete post Failed, _id: ${_id}`)
  }
})

export default app
