const express = require("express")
const app = express()

// root page. redirect to page '/post'
app.get("/", (req, res) => {
  console.log("root로 접근 > [redirect] to /post ")
  res.redirect("/post")
})

module.exports = app
