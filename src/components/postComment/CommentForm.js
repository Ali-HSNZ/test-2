const CommentForm = ({commentValue , setCommentValue}) => {
	return ( 
		<form className="mt-4" onSubmit={e => e.preventDefault()}>
			<textarea value={commentValue} onChange={input => setCommentValue(input.target.value)} placeholder="نظرت رو برام بنویس ..." id="" className="h-20 focus:ring-primary p-4 rounded my-4 w-full border-none ring-2 ring-slate-300 shadow-sm focus:outline-none focus:ring-2 dark:focus-within:ring-blue-500 dark:text-slate-100 dark:placeholder:text-slate-500 dark:ring-2 dark:ring-slate-500 dark:focus:ring-blue-400 dark:bg-transparent">
			</textarea>
			<button className="bg-blue-700 hover:bg-blue-600 text-white font-[iransansweb] py-3 px-6 rounded-lg  mt-4 mx-auto  w-full sm:w-56">
				ثبت نظر
			</button>
		</form>
	 );
}
 
export default CommentForm;