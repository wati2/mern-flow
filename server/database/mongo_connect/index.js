// Module
const mongoose = require("mongoose")
const makeConfig = require("./make-config")

const accountInfo = makeConfig()
// Mongoose Promise
mongoose.Promise = global.Promise

// Set account inff
const username = accountInfo.username
const password = accountInfo.password
const dbname = accountInfo.dbname

const MONGO_URI = `mongodb+srv://${username}:${password}@cluster0.0vgfg.azure.mongodb.net/${dbname}?retryWrites=true&w=majority`
const MONGO_OPTION = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
}
const MONGO_MESSAGE = " [mern-flow] # Successfully connected to mongodb"

// Export 부분
const mongo_mongoose = {
  connect: function () {
    // MongoDB Connect
    mongoose
      .connect(MONGO_URI, MONGO_OPTION)
      .then(() => console.log(MONGO_MESSAGE))
      .catch((e) => console.error(e))

    // 연결 후에 이벤트 핸들러
    mongoose.connection.on(
      "error",
      console.error.bind(console, "connection error:")
    )
    // 연결이 생성되면 콜백이 호출됨
    mongoose.connection
      .once("open", function () {
        console.log(" [mern-flow] # mongoose.connection.once / callback")
      })
      .catch((e) => console.log(" [mern-flow] # error: " + e))
  },
}

module.exports = mongo_mongoose
