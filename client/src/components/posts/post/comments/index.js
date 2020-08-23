import React, { Component } from "react"
import "./index.scss"

class Comments extends Component {
  render() {
    return (
      <div className="replyWrap">
        <div className="author">{this.props.author}</div>
        <div className="content">{this.props.content}</div>
        <div className="createAt">{this.props.createdAt}</div>
      </div>
    )
  }
}
export default Comments
