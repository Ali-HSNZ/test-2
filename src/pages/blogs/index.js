import { useState } from "react";
import Posts from "@/components/Posts";

import axios from 'axios'
import Categories from "@/components/Categories";
import Sidebar from "@/components/sideBar";


export default function Home({blogs , categories }) {

  const [isDropDownList, setIsDropDownList] = useState(true);

  return (
		<>
			<div className="mt-6 font-[iransansweb]">
				<span>خانه {" > "}</span>
				<span className="font-bold">مقالات آموزشی</span>
			</div>

			<div className="flex justify-between mt-6 font-[iransansweb] ">
				<div className="ml-6  w-1/4">
					<Categories isDropDownList={isDropDownList} setIsDropDownList={setIsDropDownList} categories={categories}/>
				</div>

				<div className="w-full">
					<Sidebar/>

					<div className="w-full mt-6 grid grid-cols-6 gap-8">

						<Posts blogs={blogs}/>

					</div>

				</div>
			</div>
		</>
  	);
}

export const getServerSideProps = async() => {
	const {data : blogResponse} =await  axios.get('http://localhost:5000/api/posts')	
	const {data : categoriesResponse} =await  axios.get('http://localhost:5000/api/post-category')	
	
	return {
		props : {
			blogs : blogResponse.data,
			categories  : categoriesResponse.data
		}
	}
} 