import React, { Component } from "react"
import like from "../../../../img/like-img.png"
import "./index.scss"

class Likecomp extends Component {
  likeClick = async (_id) => {
    this.props.incrementLikes(_id)
  }

  render() {
    return (
      <div className="like-div">
        <img
          onClick={() => this.likeClick(this.props._id)}
          className="like-img"
          src={like}
          alt="like"
        ></img>
        <b>{this.props.likeNum}</b>
      </div>
    )
  }
}
export default Likecomp
