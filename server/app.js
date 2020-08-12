"use strict"

// ENV
require("dotenv").config()

// DEPENDENCIES
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const port = 3001

const router = require("./router")
const mongo_mongoose = require("./database/mongo_connect")
const { Mongoose } = require("mongoose")

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
app.listen(port, () => console.log(`Example app listening at ${port}`))
