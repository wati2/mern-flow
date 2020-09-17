import React, { Component } from 'react'
import Likecomp from './LikeComp'
import './PostContent.scss'

class PostContent extends Component {
  btnDelete = (_id) => {
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
            likeNum={this.props.likeNum}
            incrementLikes={this.props.incrementLikes}
          />
        </div>
        <div className="content">{this.props.content}</div>
      </div>
    )
  }
}

export default PostContent
