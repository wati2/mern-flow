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
    console.log(" [mern-flow] # Get all posts list")
    res.json(getAllPosts)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
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
    res.status(500).send(e)
  }
})

// Post 삭제 mongoose delete one
app.delete("/:_id", async (req, res) => {
  try {
    const _id = req.params._id
    // check post exist
    const flagExist = await postSchemaModel.findById(_id).exec()
    // if does not exist post, res.send
    if (!flagExist) {
      console.log(" [mern-flow] # Does not exist post, _id:" + _id)
      res.send(`Does not exist post, _id:" ${_id}`)
    }
    // if exist post, delete post
    if (flagExist) {
      const post = await postSchemaModel.deleteOne({ _id: _id }).exec()
      const flagDelete = await postSchemaModel.findById(post._id)
      if (!flagDelete) {
        console.log(" [mern-flow] # Delete post successfull, _id:" + _id)
        res.send(`Delete post successfull, _id: ${_id}`)
      } else {
        console.log(" [mern-flow] # !! Delete post failed, _id:" + _id)
        res.send(`Delete post failed, _id: ${_id}`)
      }
    }
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
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
    console.log(` [mern-flow] # add comment & Updated _id: ${_id}`)
    res.send(`add comment & Updated _id: ${_id}`)
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

// delete comment one
app.delete("/:idPost/:idComment", async (req, res) => {
  try {
    const idPost = req.params.idPost
    const idComment = req.params.idComment
    await postSchemaModel
      .findOneAndUpdate(
        { _id: idPost },
        { $pull: { comments: { _id: idComment } } }
      )
      .exec()

    // response
    console.log(
      ` [mern-flow] # delete comment by updated idComment: ${idComment}`
    )
    res.send(
      `delete comment by updated idPost: ${idPost}, idComment: ${idComment}`
    )
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
})

export default app
