import { ChevronDownIcon } from "@heroicons/react/outline";
import { IconButton } from "@mui/material";
import Link from "next/link";

const Categories = ({isDropDownList , setIsDropDownList , categories}) => {



	return (  
		<>
		
			<div
				className={`${
				isDropDownList ? "rounded-t-2xl" : "rounded-2xl"
				}  flex flex-row justify-between items-center flex-shrink-0 flex-grow h-14 px-4 bg-purple-300`}
			>
			
				<span>دسته بندی مقالات </span>
				<IconButton
					onClick={() => setIsDropDownList(!isDropDownList)}
					variant="outlined"
					className={`rounded-full transition-all duration-300 border-none p-2 ${
				isDropDownList ? "rotate-180" : " rotate-0"}`}>
				
			
					<ChevronDownIcon className="w-5" />
				</IconButton>
			</div>

			<nav
				className={`flex flex-col bg-purple-100 justify-center items-center ${
				isDropDownList ? "" : "opacity-0"
			}`}>
				<Link href={`/blogs`}>
					<a className="py-3 border border-purple-200 w-full px-4 hover:bg-purple-200  text-sm ">
						همه مقالات
					</a>
				</Link>
				{categories.map(category => {
					return(
						<Link href={`/blogs/${category.englishTitle}`}>
							<a className="py-3 border border-purple-200 w-full px-4 hover:bg-purple-200  text-sm ">
								{category.title}
							</a>
						</Link>
					)
				})}
			</nav>

		</>


	);
}
 
export default Categories;