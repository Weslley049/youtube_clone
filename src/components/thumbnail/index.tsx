import { useState } from "react";
import { calcularDiferencaDatas, formatarNumero } from "../../utils";
import './styles.css';
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom";

export interface ThumbnailContainerProps {
    title: string,
    channelName: string,
    views: number,
    timing: string,
    url: string,
    horizontal?: boolean;
    sinopse?: string;
    dontSetShowVideo?: boolean;
    noThumbFoto?: boolean;
}

const ThumbnailContainer = (props: ThumbnailContainerProps) => {
    const { channelName, horizontal, timing, title, views, sinopse, url, dontSetShowVideo, noThumbFoto} = props;

    const [showVideo, setShowVideo] = useState(false);

    const handleMouseEnter = () => {
            if(!dontSetShowVideo){
                setShowVideo(true);
            }
        
      
      };

      console.log(noThumbFoto)
    
      const handleMouseLeave = () => {
        setShowVideo(false);
      };

    return (
        <div>
            <Link to={`/watch?v=${url}`} >
            {!horizontal ? (
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='flex flex-col h-full w-full gap-3 cursor-pointer'>
                <div 
                    className={`rounded-lg border w-full h-4/6 sm:w-auto border-b-gray-400`}>    
                        {showVideo ? (
                            <ReactPlayer width='100%' height='100%' url={url} muted playing/>
                        ): (
                            <img src="thumb.webp" alt="Thumbnail" className="rounded-lg size-full"/> 
                        )} 
                </div>  

                <div className="flex gap-2 h-2/6"> 
                   {!noThumbFoto && (
                     <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white"> 
                         <img src="thumb.webp" className="h-full w-full rounded-full sm:w-auto"/> 
                     </div>	
                   )}
                  

                    <div className="flex flex-col gap-1 "> 
                        <p className="truncate-custom"> {title} </p>
                        <p className="text-sm text-slate-600"> {channelName} </p>
                        <div className="flex gap-2">
                            <p className="text-sm text-slate-600"> {formatarNumero(views)} visualizações - </p>
                            <p className="text-sm text-slate-600"> {calcularDiferencaDatas(timing)}</p>
                        </div>
                    
                    </div>  
                </div>  
            </div>
            ) : (
                <div 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='flex gap-3 h-full w-full'>
                    <div className="w-5/12">
                        {showVideo ? (
                            <ReactPlayer width='100%' height='100%' url={url} muted playing/>
                        ): (
                            <img src="thumb.webp" alt="Thumbnail"
                            className="
                                max-md:size-full
                                max-lg:w-full
                                border-b-gray-400 
                                rounded-lg"
                            /> 
                        )} 
                        
                    
                    </div>
                    
                    <div className="w-7/12 md:w-6/12"> 
                        <div className="flex flex-col gap-2 truncate  overflow-hidden"> 
                            <p> {title} </p>
                            <div className="flex gap-2">
                                <p className="text-xs text-slate-600"> {formatarNumero(views)} visualizações - </p>
                                <p className="text-xs text-slate-600"> {calcularDiferencaDatas(timing)}</p>
                            </div>
                            
                            <div className="flex items-center gap-2"> 
                                 {!noThumbFoto && (
                                    <img src="thumb.webp" className="w-8 h-8 text-white rounded-full"/> 
                                 )}
                             
                                <p className="text-sm text-slate-600"> {channelName} </p>
                            </div>	
                    

                            {sinopse && (
                                <p className="text-xs w-8/12 text-slate-600"> {sinopse}</p>
                            )}  
                        
                        
                        </div>  

                    
                    </div>  
                </div>  

            )}
            </Link>
        </div>
      
    )
}

export default ThumbnailContainer