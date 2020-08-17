"use strict"

// DEPENDENCIES
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
const port = 3001

import router from "./router/index.js"
import mongo_mongoose from "./database/mongo_connect/index.js"
import pkg from "mongoose/index.js"
const Mongoose = pkg

// Static FIle Service
app.unsubscribe(express.static("public"))
// Body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

// Node.js의 native Promise 사용
Mongoose.Promise = global.Promise

// Mongo
mongo_mongoose.connect()
// Router
app.use("/", router)

// Start Server
app.listen(port, () =>
  console.log(` [App.js] # Example app listening at ${port}`)
)
