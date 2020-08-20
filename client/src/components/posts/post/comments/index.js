import React, { Component } from "react"
import "./index.scss"

class Comments extends Component {
  render() {
    return (
      <div className="replysWrap">
        <b>댓글 : {this.props.comment} </b>
      </div>
    )
  }
}
export default Comments
