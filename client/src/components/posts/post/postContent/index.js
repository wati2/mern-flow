import React, { Component } from "react"
import Likecomp from "./likecomp"
import "./index.scss"

class PostContent extends Component {
  constructor(props) {
    super(props)
  }

  btnDelete = async (_id) => {
    this.props.postDelete(_id)
  }

  render() {
    return (
      <div className="contentWrap">
        <div className="header">
          <div className="author">{this.props.author}</div>
          <div className="delete">
            <button onClick={() => this.btnDelete(this.props._id)}>
              Delete this post
            </button>
          </div>
          <div className="createdAt">Date: {this.props.createdAt}</div>
          <Likecomp
            _id={this.props._id}
            likeNum={this.props.likeNum}/>
        </div>
        <div className="content">{this.props.content}</div>
      </div>
    )
  }
}

export default PostContent
