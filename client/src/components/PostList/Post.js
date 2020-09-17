import React, { Component } from 'react'
import PostContent from './postContent/PostContent'
import Comments from './postContent/Comments'
import axios from 'axios'
import './Post.scss'

class Post extends Component {
  state = {
    replyList: [],
    replyAuthor: '',
    replyContent: '',
  }

  componentDidMount() {
    this.getReplyList()
  }

  commentDelete = async (idPost, idComment) => {
    await this.props.commentDelete(idPost, idComment)
    // Re-Rendering 부분
    await this.getReplyList()
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
        idPost={this.props._id}
        idComment={item._id}
        author={item.author}
        content={item.content}
        createdAt={item.createdAt}
        commentDelete={this.commentDelete}
      ></Comments>
    ))
    // setState
    this.setState({ replyList: replyList })
  }

  addReply = async (_id, author, content) => {
    if (_id && author && content) {
      await axios.post('http://localhost:3001/post/addComment', {
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
          incrementLikes={this.props.incrementLikes}
        ></PostContent>
        <div className="replysWrap">
          {/* 댓글 루프부분 */}
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
                  this.addReply(
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
