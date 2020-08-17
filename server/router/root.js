import express from "express"
const app = express()

// root page. redirect to page '/post'
app.get("/", (req, res) => {
  console.log("root > [redirect] to /post ")
  res.redirect("/post")
})

export default app
