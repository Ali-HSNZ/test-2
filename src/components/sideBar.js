import {
	AdjustmentsIcon,
      } from "@heroicons/react/outline";
const Sidebar = () => {
	return (  
		<div className="w-full  flex  space-x-7 bg-gray-100 px-6 py-3 text-sm rounded-lg">
			<div className="flex justify-center items-center">
				<AdjustmentsIcon className="w-6 ml-2" />
				<span className="ml-6"> مرتب سازی : </span>
			</div>
			<span>پر بازدید ترین </span>
			<span>محبوب ترین </span>
			<span> جدید ترین </span>
		</div>
	);
}
 
export default Sidebar;