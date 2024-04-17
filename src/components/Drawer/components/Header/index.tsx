


import { IoIosNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

import useHeader from "./hook";

const Header = () => {
	const {maxWidth,search_query,setSearchQuery, buttomRef,inputRef} = useHeader();

	return (
		<div className="w-full text-black flex items-center justify-between px-2 py-2">
			<div className="flex items-center">
				{maxWidth >= 768 && (
					<button className="h-12 w-12 flex items-center justify-center rounded-full hover:bg-zinc-200">
						<AiOutlineMenu size={20}/>	
					</button>
				)}
				
			
				<Link to={`/`}>
					<img src='youtubelogo2.png' height={200} width={100}/>
				</Link>
			</div>

			<div className=" flex items-center justify-center w-1/2 gap-3">
				{maxWidth >= 768 && (
					<div className=" flex items-center w-full">
						<input 
						ref={inputRef}
						onChange={(e) => setSearchQuery(e.target.value)}
						className=' w-full border border-gray-300 px-5 py-2.5 rounded-l-full' placeholder="Pesquisar"/>

							<Link to={`/results?search_query=${search_query}`}>
								<button
								ref={buttomRef}
								disabled={!search_query}	
								className=" h-full rounded-r-full px-5 py-2.5 border border-gray-300 bg-neutral-100">
									<IoIosSearch size={25}/>	
								</button>
							</Link> 
						
						
					</div> 
				)}	

				{maxWidth > 768 && (
					<div className="w-9 h-9 p-5 rounded-full flex items-center justify-center border border-gray-300 bg-neutral-100">
						<button> 
							<FaMicrophone size={20}/> 
						</button>
					</div> 
				)}		
			
			</div>

			<div className="flex justify-between items-center gap-4">
				
				<RiVideoAddLine size={25} />
				<IoIosNotificationsOutline size={25}/>
				
				{maxWidth >= 768 && (
					<div className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center text-white 	"> 
						W 
					</div>
				)}

				{maxWidth < 768 && (
					<button	
					className=" h-full rounded-full p-2 hover:bg-neutral-100">
						<IoIosSearch size={25}/>	
					</button>
				)}
					
			</div>

		</div>
	)

}	

export default Header;  