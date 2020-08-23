import React, { Component } from "react"
import PostContent from "./postContent"
import Comments from "./comments"
import "./index.scss"

class Post extends Component {
  state = {
    replyList: [],
  }

  componentDidMount() {
    this.getReplyList()
  }

  getReplyList = async () => {
    const replyList = await this.props.comments.map((item, i) => (
      <Comments
        key={item._id}
        _id={item._id}
        author={item.author}
        content={item.content}
        createdAt={item.createdAt}
      ></Comments>
    ))
    // setState
    this.setState({ replyList: replyList })
  }

  render() {
    return (
      <div className="postWrap">
        <PostContent
          _id={this.props._id}
          author={this.props.author}
          content={this.props.content}
          likeNum={this.props.likeNum}
          createdAt={this.props.createdAt}
          postDelete={this.props.postDelete}
        ></PostContent>
        <div className="replysWrap">{this.state.replyList}</div>
      </div>
    )
  }
}
export default Post
