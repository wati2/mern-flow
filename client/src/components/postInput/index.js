import React, { Component } from "react"
import "./index.scss"
import axios from "axios"

class PostPut extends Component {
  state = {
    author: "",
    content: "",
  }
  contentChange = (e) => {
    this.setState({
      content: e.target.value,
    })
  }
  authorChange = (e) => {
    this.setState({
      author: e.target.value,
    })
  }
  btnPost = async () => {
    alert("작성자 : " + this.state.author + " \n내용 : " + this.state.content)
    let response = await axios.post("http://localhost:3001/post", {
      author: this.state.author,
      content: this.state.content,
    })
    console.log(response.request)
    if (response) {
      alert(response.data)
    }
  }

  render() {
    return (
      <div className="addPost">
        <form>
          <input
            placeholder="작성자"
            value={this.state.author}
            onChange={this.authorChange}
          ></input>
          <input
            placeholder="내용"
            value={this.state.content}
            onChange={this.contentChange}
          ></input>
          <button onClick={this.btnPost}>Enter Post</button>
        </form>
      </div>
    )
  }
}
export default PostPut
