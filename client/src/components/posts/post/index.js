import React, { Component } from "react"
import PostContent from "./postContent"
import Comments from "./comments"
import axios from "axios"
import "./index.scss"

class Post extends Component {
  state = {
    replyList: [],
    replyAuthor: "",
    replyContent: "",
  }

  componentDidMount() {
    this.getReplyList()
  }

  replyContentChange = (e) => {
    this.setState({
      replyContent: e.target.value,
    })
  }

  replyAuthorChange = (e) => {
    this.setState({
      replyAuthor: e.target.value,
    })
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

  btnReply = async (_id, author, content) => {
    if (_id && author && content) {
      await axios.post("http://localhost:3001/post/addComment", {
        _id: _id,
        author: author,
        content: content,
      })
    }
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
        <div className="replysWrap">
          {this.state.replyList}
          <div className="addComment">
            <form className="addReplyWrap">
              <input
                placeholder="name"
                value={this.state.replyAuthor}
                onChange={this.replyAuthorChange}
              ></input>
              <input
                placeholder="reply"
                value={this.state.replyContent}
                onChange={this.replyContentChange}
              ></input>
              <button
                onClick={() =>
                  this.btnReply(
                    this.props._id,
                    this.state.replyAuthor,
                    this.state.replyContent
                  )
                }
              >
                Add Reply
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Post
