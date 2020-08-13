const fs = require("fs")

const myJson = `{
  "username":"",
  "password":"",
  "dbname":"mern-db"
}
`
const pathConfig = `${__dirname}\\db-config.json`

function getAccountInfo() {
  try {
    if (fs.existsSync(pathConfig)) {
      //file exists
      console.log(` [mern-flow] # "${pathConfig}" 존재함 파일생성하지 않음`)
      // read json file
      let rawdata = fs.readFileSync(`${pathConfig}`)
      let accountInfo = JSON.parse(rawdata)

      if (accountInfo.username && accountInfo.password) {
        console.log(` [mern-flow] # username 과 password 입력 확인했습니다.`)
        console.log(` [mern-flow] # 해당 정보로 database 접속 시도합니다.`)
        return accountInfo
      } else {
        console.log(
          ` [mern-flow] # 위의 경로로 username 과 password를 입력해 주세요`
        )
        console.log(` [mern-flow] # ${accountInfo}`)
        console.log(` [mern-flow] # Process 종료합니다.`)
        process.exit()
      }
    } else {
      fs.writeFile(`${pathConfig}`, myJson, function (err) {
        if (err) throw err
        console.log(` [mern-flow] # 파일 생성 완료 db 정보를 입력해 주세요`)
        console.log(` [mern-flow] # "${pathConfig}"`)
        console.log(` [mern-flow] # Process 종료합니다.`)
        process.exit()
      })
    }
  } catch (err) {
    console.error(err)
  }
}

module.exports = getAccountInfo
