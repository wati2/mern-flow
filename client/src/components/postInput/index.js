import React, { Component } from "react"
import "./index.scss"

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
  btnPost = () => {
    if (this.state.author && this.state.content) {
      alert("작성자 : " + this.state.author + " \n내용 : " + this.state.content)
      fetch("http://localhost:3001/post", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author: this.state.author,
          content: this.state.content,
        }),
      })
    } else {
      alert("값이 비어있습니다")
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
