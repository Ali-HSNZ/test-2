import { Button } from '@mui/material';
import { useState } from 'react';
import CommentForm from './CommentForm';
import image from '/public/images/nextJs.png'

const SingleComment = ({comment}) => {
	const [isReply , setIsReply] = useState(false)
	const [commentValue , setCommentValue] = useState('')
	
	return (  
		<>
			{comment && (
						<div key={comment._id} className="border-2 border-gray-400 p-4 rounded-2xl mt-5">
						<div className="flex gap-x-4">
							<div className="w-14  rounded-full bg-red-200 overflow-hidden">
								<div className="aspect-w-9 aspect-h-9">
								<img src={image.src} className='object-cover object-center w-full h-full'/>
								</div>
							</div>
							<div className="font-sans flex flex-col justify-between">
								<p>{comment.writer.name}</p>
								<p>{new Date(comment.createdAt).toLocaleDateString('fa-IR')}</p>
							</div>
						</div>
						<p className="mt-4 font-sans leading-8">
							{comment.content}
						</p>
						<Button onClick={()=> setIsReply(!isReply)} className="font-sans mt-4">
							{isReply ? "بیخیال" : "پاسخ به؟ "}
						</Button>
			
						{isReply && (
							<>
								<p className="mt-4 font-[iransansweb]">{`در حال پاسخ به ${comment.writer?.name}`}</p>
								<CommentForm commentValue={commentValue}  setCommentValue={setCommentValue}/>
							</>
			
						)}
			
			
					</div>
			)}
		</>
	);
}
 
export default SingleComment;