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

  postDelete = async (_id) => {
    const res = await axios.delete("http://localhost:3001/post/" + _id)
    if (res.status == 200) {
      await this.getPostList()
    }
  }

  getPostList = async () => {
    let response = await axios.get("http://localhost:3001/post")
    const posts = response.data
    const postList = await posts.map((item, i) => (
      <Post
        key={item._id}
        _id={item._id}
        author={item.author}
        content={item.content}
        createdAt={item.createdAt}
        comment={item.comments}
        postDelete={this.postDelete}
      ></Post>
    ))
    // setState, re-render 되는 부분
    this.setState({ postList: postList })
  }

  render() {
    return <div className="postsWrap">{this.state.postList}</div>
  }
}

export default Posts
