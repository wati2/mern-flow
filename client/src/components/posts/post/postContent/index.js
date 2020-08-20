import React, { Component } from "react"
import "./index.scss"

class PostContent extends Component {
  render() {
    return (
      <div className="contentWrap">
        <div className="author">{this.props.author}</div>
        <div className="content">{this.props.content}</div>
      </div>
    )
  }
}

export default PostContent
