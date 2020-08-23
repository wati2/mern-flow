import React, { Component } from "react"
import "./index.scss"

class Comments extends Component {
  render() {
    return (
      <div className="replyWrap">
        <span className="createAt">{this.props.createdAt}</span>{" "}
        <b className="author">{this.props.author}</b>{" "}
        <span className="content">{this.props.content}</span>
      </div>
    )
  }
}
export default Comments
