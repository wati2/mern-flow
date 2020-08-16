const fs = require("fs")

const mongo_config = {
  // 사용변수
  filepath: `${__dirname}\\db-config.json`,
  mongo_uri: "",
  mongo_option: {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  mongo_message: " [mern-flow] # Successfully connected to mongodb",
  defualtJson: `{"username":"", "password":"", "dbname":"mern-db"}`,
  // uri 설정
  setUri: function (dbConfig) {
    this.mongo_uri = `mongodb+srv://${dbConfig.username}:${dbConfig.password}@cluster0.0vgfg.azure.mongodb.net/${dbConfig.dbname}?retryWrites=true&w=majority`
    return this.mongo_uri
  },
  // 파일 존재 확인
  checkExistFile: function () {
    const isExist = fs.existsSync(this.filepath)
    return new Promise((resolve, reject) => {
      if (isExist) {
        resolve(isExist)
      } else {
        fs.writeFile(this.filepath, this.defualtJson, (err) => {
          if (err) throw err
          console.log(this.filepath)
          reject(" [mern-flow] # 파일생성함 계정입력해 주세요")
        })
      }
    })
  },
  // usename, password, dbname 확인
  checkExistInfo: function () {
    return new Promise((resolve, reject) => {
      // read json file
      fs.readFile(this.filepath, (err, data) => {
        if (err) reject(err)
        const accountInfo = JSON.parse(data)
        if (accountInfo.username && accountInfo.password) {
          resolve(accountInfo)
        } else {
          reject(" [mern-flow] # 계정입력필요")
        }
      })
    })
  },
  // get config data
  getConfigData: function (isExist, configData) {
    return new Promise((resolve, reject) => {
      if (isExist && configData) {
        resolve(configData)
      } else {
        console.log("reject")
        reject(`username, password 정보 입력해주세요`)
      }
    })
  },
}

module.exports = { mongo_config }
