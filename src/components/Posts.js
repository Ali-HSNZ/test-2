import {
	ClockIcon,
	HeartIcon,
	BookmarkIcon,
	AnnotationIcon,
      } from "@heroicons/react/outline";
import Link from "next/link";
import { toPersianDigits } from "src/utils/toPersianDigits";

//       import oam from ''
const Posts = ({blogs}) => {
	return ( 
		<>		
			{blogs.docs.map(blog => {
				return(
					<section key={blog._id} className="col-span-2 p-3 flex flex-col  bg-white rounded-md">

						<div className="aspect-w-16 aspect-h-9 ">
							<img src={blog.coverImage} alt="..." className="rounded-2xl w-full h-full object-center object-cover " />
						</div>
			
						<h4 className="mt-4 font-bold text-gray-700" >
							<Link href={`/posts/${blog.hashId}/${blog.slug}`}>
								<a>
									{blog.title}
								</a>
							</Link>
						</h4>
			
						<div className="flex flex-col justify-end  flex-1">
						
							<div className="flex justify-between  items-center mt-4">
								<div className="flex items-center">
									<img src={blog.coverImage} className=' w-9 h-9 rounded-full'/>
									<h4 className="mr-2 text-sm text-gray-600">{blog.author.name}</h4>
								</div>
								<h5 className="text-sm px-4 py-2 bg-blue-50 text-blue-700  rounded-lg">{blog.category.title}</h5>
							</div>
				
							<div className="flex justify-between  mt-4 text-sm">
								<div className="flex">
									<div className={` flex items-center rounded-lg px-2 py-1  text-red-700 bg-red-100`}>
										<HeartIcon className="w-5"/>
										<h6 className="mr-0.5">{toPersianDigits(blog.likesCount)}</h6>
									</div>
									<div className="bg-blue-100 mr-2 flex items-center rounded-lg px-2 py-1  text-blue-700">
										<BookmarkIcon className="w-5"/>
									</div>
									<div className="bg-gray-100 mr-2 flex items-center rounded-lg px-2 py-1  text-gray-700">
										<AnnotationIcon className="w-5"/>
										<h6 className="mr-0.5">{toPersianDigits(blog.comments.length)}</h6>
									</div>
								</div>
			
								<div className="flex text-gray-500 items-center">
									<ClockIcon className="w-5"/>
									<h4 className="mr-1 text-sm">زمان مطالعه : {blog.readingTime} دقیقه</h4>
								</div>
							</div>
			
						</div>
		
					</section>
				)
			})}
		</>

	 );
}
 
export default Posts;