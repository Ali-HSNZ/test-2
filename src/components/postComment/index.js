import { Button } from "@mui/material";
import { useState } from "react";
import CommentForm from "./CommentForm";
import ReplyComment from "./ReplyComment";
import SingleComment from "./SingleComment";

const PostComment = ({post}) => {
	const [commentValue , setCommentValue] = useState('')
	
	return (  
		<>
			{post.comments.map(comment => {
				return(
					<div key={comment?._id}>
						<SingleComment comment={comment}/>
						<ReplyComment comments={post.comments} parentCommentId={comment?._id}/>
					</div>
				)
			})}
			<CommentForm commentValue={commentValue}  setCommentValue={setCommentValue}/>
		</>
	); 
}
 
export default PostComment;