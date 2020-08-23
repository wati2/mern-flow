import React, { Component } from "react"
import "./index.scss"

class Comments extends Component {
  constructor(props) {
    super(props)
  }

  commentDelete = (idPost, idComment) => {
    this.props.commentDelete(idPost, idComment)
  }

  render() {
    return (
      <div className="replyWrap">
        <span
          className="button"
          onClick={() =>
            this.commentDelete(this.props.idPost, this.props.idComment)
          }
        >
          삭제
        </span>
        <span className="createAt">{this.props.createdAt}</span>{" "}
        <b className="author">{this.props.author}</b>{" "}
        <span className="content">{this.props.content}</span>
      </div>
    )
  }
}
export default Comments
