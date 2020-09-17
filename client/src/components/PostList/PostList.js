import React, { Component } from 'react'
import axios from 'axios'
import Post from './Post/Post'
import PostInput from './PostInput/PostInput'
import './PostList.scss'

class PostList extends Component {
  state = {
    postList: [],
  }

  componentDidMount() {
    this.getPostList()
  }

  postDelete = async (_id) => {
    const res = await axios.delete('http://localhost:3001/post/' + _id)
    if (res.status === 200) {
      await this.getPostList()
    }
  }

  commentDelete = async (idPost, idComment) => {
    try {
      const res = await axios.delete(
        `http://localhost:3001/post/${idPost}/${idComment}`
      )
      if (res.status === 200) {
        await this.getPostList()
      }
    } catch (error) {
      console.log(error)
    }
  }

  incrementLikes = async (_idPost) => {
    try {
      const res = await axios.post('http://localhost:3001/post/like', {
        _id: _idPost,
      })
      if (res.status === 200) {
        await this.getPostList()
      }
    } catch (error) {
      console.log(error)
    }
  }

  getPostList = async () => {
    let response = await axios.get('http://localhost:3001/post')
    const posts = response.data
    const postList = posts.map((item) => (
      <Post
        key={item._id}
        _id={item._id}
        author={item.author}
        content={item.content}
        createdAt={item.createdAt}
        comments={item.comments}
        likeNum={item.likeNum}
        postDelete={this.postDelete}
        commentDelete={this.commentDelete}
        incrementLikes={this.incrementLikes}
      ></Post>
    ))
    // setState, re-render 되는 부분
    this.setState({ postList: postList })
  }

  render() {
    return (
      <>
        <PostInput />
        <div className="postsWrap">{this.state.postList}</div>
      </>
    )
  }
}

export default PostList
