import axios from "axios";
import avatar from '/public/images/nextJs.png'
import {LinkIcon , BookmarkIcon} from '@heroicons/react/outline'
import { BookmarkIcon as  BookmarkedIcon} from '@heroicons/react/solid'
import { toPersianDigits } from "src/utils/toPersianDigits";

import { FaTelegram , FaTwitterSquare} from 'react-icons/fa';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {
	ClockIcon,
	HeartIcon,
	AnnotationIcon,
      } from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@mui/material";
import PostComment from "@/components/postComment";


const postSlug = ({post}) => {


	const [copyState , setCopyState] = useState({value: '',copied: false,})

	return (  
		<>
		
			<header className="mt-5 flex justify-between items-start bg-gray-200 p-4 rounded-2xl">
					{/* right */}
				<section className="flex gap-x-6 items-center">
					<div className="w-20">
						{/* image */}
						<div className="aspect-w-9 aspect-h-9 rounded-full overflow-hidden ">
							<img className=" w-full h-full object-center object-cover " src={avatar.src}/>
						</div>
					</div>

					<div className="flex flex-col gap-y-2">
						<div className="flex gap-x-4 items-center">
							<h4 className="font-bold font-[iransansweb] whitespace-nowrap">علی حسن زاده</h4>
							<h5 className="bg-gray-50 py-1 text-blue-700 px-4 rounded-lg font-sans text-sm">ری‌اکت</h5>
						</div>
						<h5 className="text-sm text-gray-500">front-end Developer</h5>
						<div className="flex gap-x-4 text-gray-600 text-sm">
							<h6>{new Date(post.createdAt).toLocaleDateString('fa-IR')}</h6>
							<h6>
								<span>خواندن در</span>
								<span className="font-[iransansweb] mx-0.5">{toPersianDigits(post.readingTime)}</span>
								<span>دقیقه</span>
							</h6>
						</div>
					</div>
				</section>

					{/* left */}
				<section className="flex gap-x-4 flex-row  items-center">
						{/* Share */}
						<div className="flex items-center border-gray-300 py-2 px-4 rounded-full hover:bg-gray-200 cursor-pointer bg-gray-100 gap-x-1 border">
							{post.isBookmarked ? <BookmarkedIcon className="w-5 "/> : <BookmarkIcon className="w-5"/>}
							<h6 className="font-sans text-sm">ذخیره</h6>
						</div>
						<LinkIcon className="w-6 text-gray-600 hover:text-black cursor-pointer " />

				</section>
			
			</header>

			<main className="mt-4">
				<article className="
					prose-h1:prose-h1 font-sans prose-h1:text-3xl prose-h1:font-extrabold prose-headings:w-full prose-headings:text-right prose-headings:font-bold prose-headings:mt-4
					prose-p:leading-8   prose-p:mt-4 prose-img:rounded-lg prose-pre:bg-gray-800 prose-pre:text-gray-300 prose-pre:p-4 
					prose-code:mt-4  prose-pre:mt-4 flex flex-col justify-center items-center prose-pre:w-full prose-img:mt-4

				">
					<h1>{post.title}</h1>
					<h6>عنوان تستی</h6>
					<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
				</article>
				<section className="flex mt-8 justify-between">

					<div className={` flex cursor-pointer items-center rounded-lg px-2 py-1  text-red-700 ${post.isLiked ? `bg-red-200` : `bg-red-100`}`}>
						<HeartIcon className="w-5"/>
						<h6 className="mr-1  ">{toPersianDigits(post.likesCount)}</h6>
					</div>
					<div className="bg-blue-100 mr-2 flex cursor-pointer items-center rounded-lg px-2 py-1  text-blue-700">
						<BookmarkIcon className="  w-5"/>
					</div>
					<div className="bg-gray-200 mr-2 flex cursor-pointer items-center rounded-lg px-2 py-1  text-gray-700">
						<AnnotationIcon className="w-5"/>
						<h6 className="mr-1  ">{toPersianDigits(post.commentsCount)}</h6>
					</div>

					<div className="w-full text-gray-600  gap-x-2  flex justify-end">
						<Link href={`https://telegram.me/share/url?url=http://localhost:3000/posts/${post.hashId}/${post.slug}&text=${post.title}`}>
							<a>
								<FaTelegram size={'1.8rem'} className=" hover:text-blue-800  cursor-pointer"/>

							</a>
						</Link>
						<Link href={`https://www.linkedin.com/sharing/share-offsite/?url=http://localhost:3000/posts/${post.hashId}/${post.slug}`}>
							<a>
								<FaTwitterSquare size={'1.8rem'} className=" hover:text-blue-500  cursor-pointer"/>
							</a>
						</Link>

						<CopyToClipboard text={`http://localhost:3000/posts/${post.hashId}/${post.slug}`}	onCopy={() => setCopyState({copied: true})}>
          						<button className={`  font-sans py-1 px-4  ${copyState.copied === false ? 'bg-white' : ' bg-blue-600 text-white'} border-gray-300  border rounded-full text-sm`}> 
								{copyState.copied ? "کپی شد" : "کپی لینک"}
							</button>
						</CopyToClipboard>
					</div>

				</section>
				<article className="mb-48">
					<h4 className="my-8 text-2xl font-extrabold font-sans">نظرات</h4>
					<PostComment post={post}/>
				</article>

			</main>
		</>

	);
}
 
export default postSlug;


export const getStaticPaths = async () => {
	const {data : {data}} = await axios.get('http://localhost:5000/api/posts')
	const paths = data.docs.map(post => {
		return {
			params : {postSlug : post.slug.toString() , hashId : post.hashId.toString()  }
		}
	})
	return{
		paths,
		fallback : false
	}
}

export const getStaticProps = async({params})=>{
	
	//? params : destracturing CTX or Context
	
	const {postSlug , hashId} = params
	const {data : {data}} = await axios.get(`http://localhost:5000/api/posts/${postSlug}`)
	return{
		props : {
			post : data
		}
	}
}