// Module
const mongoose = require("mongoose")
const { mongo_config } = require("./check-config")

// Mongoose Promise
mongoose.Promise = global.Promise

// Export 부분
const mongo_mongoose = {
  connect: async function () {
    try {
      // mongodb_connect config 파일 생성 및 읽기
      const isFileExist = await mongo_config.checkExistFile()
      const checkInfo = await mongo_config.checkExistInfo()
      const dbConfig = await mongo_config.getConfigData(isFileExist, checkInfo)
      const mongo_uri = mongo_config.setUri(dbConfig)
      const mongo_option = mongo_config.mongo_option

      await mongoose.connect(mongo_uri, mongo_option).then(() => {
        console.log(mongo_config.mongo_message)
      })
    } catch (err) {
      console.log(err)
      console.log(" [mern-flow] # DB연결부분 에러")
      process.exit()
    }
  },
}

module.exports = mongo_mongoose
