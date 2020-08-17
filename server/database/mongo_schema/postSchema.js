import mongoose from "mongoose"
import { commentSchema } from "./commentSchema.js"

/**
 *  - Instagram 게시글 기준
 *  - 1.작성자, 2.내용
 *  - 만약 사진을 전달한다면 다른서버에 저장하고 그 서버에서 링크로 전달받아서 list에서 표현
 *  - 두개 전달한 경우 게시글이 생긴다고 가정 게시글에서 관리(저장)하는 값들
 *  - 1.작성자, 2.내용, 3.글작성시간, 4.좋아요갯수 5. 댓글
 *  - 댓글의 구성요소들 / 댓글작성자. 댓글내용. 작성시간. 대댓글인지. (오름차순 때리기)
 **/

const postSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    content: { type: String, required: true },
    likeNum: { type: Number, required: true, default: 0 },
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
)

const postSchemaModel = mongoose.model("Post", postSchema)

export default postSchemaModel
