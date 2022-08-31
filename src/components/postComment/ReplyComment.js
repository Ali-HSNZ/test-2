import React from "react";
import SingleComment from "./SingleComment";

const ReplyComment = ({parentCommentId , comments}) => {
	return  comments && comments.map((comment,index) => {
		return (
			parentCommentId === comment?.responseTo && (
				<div className="mr-8" key={index}>
					<SingleComment  comment={comment}/>
					<ReplyComment comments={comments} parentCommentId={comment?._id}/>
				</div>
			)
			)
		})
}
 
export default ReplyComment;