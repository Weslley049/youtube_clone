import { Carousel } from "../../components/Carousel";
import ThumbnailContainer from "../../components/thumbnail";
import { FilterOptions, videos } from "./utils";

const Home = () => {
    return (
     <div className="h-full"> 
        {/* <div className="w-full">
            <Carousel options={FilterOptions}/>
        </div> */}
      
     
        
        <div className="p-3 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-5 gap-4">
            {videos.map(elem => (
                <ThumbnailContainer {...elem} />
            ))}
         </div>    
     </div>   
    )

}


export default Home; 