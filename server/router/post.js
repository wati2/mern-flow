const express = require("express")
const app = express()

const { Post, Comment } = require("../database/mongo_schema")

// Post 목록 조회
app.get("/", async (req, res) => {
  try {
    const findPost = await Post.find({})
    res.json(findPost)
  } catch (e) {
    console.log(e)
    res.send("error")
  }
})

// 새로운 Post, 글 생성
app.post("/", async (req, res) => {
  const addPost = new Post({
    content: req.body.content,
    author: req.body.author,
  })

  try {
    const result = await addPost.save()
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
    await Post.findOneAndUpdate({ _id: _id }, { $push: { comments: comment } })
    res.send(`add comment & Updated _id: ${_id}`)
  } catch (e) {
    console.log(e)
  }
})

module.exports = app
