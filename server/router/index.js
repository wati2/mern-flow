import root from "./root.js"
import post from "./post.js"
import express from "express"

const app = express()

// 이곳에서 각각의 라우터를 호출하여 하나의 파일로 취합한다, App.js 파일에서는 이파일 하나만 호출하면 된다. 굳

// root
app.use("/", root)

// depth-level 1
app.use("/post", post)

export default app
