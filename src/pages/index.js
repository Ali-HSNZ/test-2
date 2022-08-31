import Link from "next/link";

const HomePage = () => {
	return (  
		<div>
			<h1 className="bg-white text-center mt-20 p-5 border">Home Page</h1>
			<div  className="w-full flex justify-center">
				<Link href='/blogs'>
					<a className="w-full text-center bg-red-100 p-5 border-red-300 border">Go To Blogs</a>	
				</Link>		
			</div>
		</div>
	);
}
 
export default HomePage;