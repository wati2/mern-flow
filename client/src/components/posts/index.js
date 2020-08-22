import React, { Component } from "react"
import axios from "axios"
import Post from "./post"
import "./index.scss"

class Posts extends Component {
  state = {
    postList: [],
  }

  componentDidMount() {
    this.getPostList()
  }

  createAtDateToString = function () {}

  getPostList = async () => {
    let response = await axios.get("http://localhost:3001/post")
    console.log(response.data)
    if (response.data) {
      // 응답
      const posts = response.data
      // post 전체목록
      const postList = await posts.map((item, i) => (
        <Post
          key={item._id}
          author={item.author}
          content={item.content}
          createdAt={item.createdAt}
          comment={item.comments}
        ></Post>
      ))

      //   setState
      this.setState({ postList: postList })

      console.log(this.state.postList)
    } else {
      alert("포스트 없음")
    }
  }

  render() {
    return <div className="postsWrap">{this.state.postList}</div>
  }
}

export default Posts
