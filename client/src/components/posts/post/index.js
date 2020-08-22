import React, { Component } from "react"
import PostContent from "./postContent"
import Comments from "./comments"
import "./index.scss"

class Post extends Component {
  render() {
    return (
      <div className="postWrap">
        <PostContent
          key={this.props._id}
          author={this.props.author}
          content={this.props.content}
        ></PostContent>

        <Comments
          comment={this.props.comment}
          createdAt={this.props.createdAt}
        ></Comments>
      </div>
    )
  }
}
export default Post
