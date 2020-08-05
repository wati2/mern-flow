const express = require("express")
const app = express()

const { Post, Comment } = require("../database/mongo_schema")

// view post list
app.get("/", (req, res) => {
  // mongoDB 데이터 읽어서 json으로 전달
  Post.find({}, function (err, post) {
    if (err) throw err
    // JSON 응답을 전송
    console.log('JSON 응답')
    res.json(post)
  })
  // Post.find({})
  //   .then((todo) => res.json(todo))
  //   .catch((err) => console.log(err))
})

// create post, insert mongodb
app.post("/", (req, res) => {
  const post = new Post({
    content: req.body.content,
    author: req.body.author,
  })

  post.save((err, post) => {
    if (err) return console.log(err)
    console.log(`========================================================`)
    console.log(`_id: ${post._id}`)
    console.log(`createdAt: ${post.createdAt}`)
    console.log(`author: ${post.author}`)
    console.log(`content: ${post.content}`)
    console.log(`likeNum: ${post.likeNum}`)
    console.log(`comments: ${post.comments}`)

    // 저장이 된 시점에 response 보냄
    res.send("create post, insert mongodb")
  })
})

app.post("/addComment", (req, res) => {
  // post의 _id 가져와서
  // post 찾음
  // 해당 post에 comment push 함

  const _id = req.body._id
  const author = req.body.author
  const content = req.body.content

  Post.find({ _id: _id }, (err, result) => {
    if (err) return console.log(err)
    console.log(result)
  })

  const comment = { author: "name" }
  // post.comments.push(comment)
  // post.save((err, post) => {
  //   if (err) return console.log(err)
  // })
})

module.exports = app
