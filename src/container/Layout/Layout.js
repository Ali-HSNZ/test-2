const Layout = ({children}) => {
    

    return (  
        <div dir='rtl' >
 
            {/* <header className={`flex justify-center px-6 py-4 bg-blue-200`}>
                Header
            </header> */}
	    
            <div className=' w-full flex justify-center '>
                <div className=" px-4 w-full max-w-[1600px]">
                    {children}
                </div>
            </div>

{/* 
                <div className='mt-8 flex justify-center px-6 py-4 bg-blue-200'>
                    <div>Footer</div>
                </div> */}
        </div>
    );
}
 
export default Layout;