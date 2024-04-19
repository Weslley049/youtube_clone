import { RiShareForwardLine } from "react-icons/ri";

import { IoIosMore } from "react-icons/io"
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiScissorsLine } from "react-icons/ri";
import { BsFilterLeft } from "react-icons/bs";

import { BiLike } from "react-icons/bi"
import { BiDislike } from "react-icons/bi";
import { calcularDiferencaDatas, formatarNumero } from "../../utils";
import { comentarios } from "../../utils/video_infos";



export interface VideoInfoInterface {
    title: string,
    channelName: string,
    views: number,
    timing: string,
    sinopse?: string;
}

export const VideoInfo = (props: VideoInfoInterface) => {
    const {channelName,timing,title,views,sinopse} = props;
   
    const maxScreenSizeWidth = window.innerWidth;

    return (
        <div className="w-full flex flex-col gap-2"> 
            <p className="text-base font-bold"> {title} </p>
            
            <div className="flex flex-wrap justify-between items-center gap-4"> 
                <div className="flex gap-2 max-lg:w-full max-sm:w-full">
                    <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white"> 
                        <img src="thumb.webp" className="h-full w-full rounded-full sm:w-auto"/> 
                    </div>

                    <div className="flex flex-col justify-center">
                        <p className="text-sm font-bold"> {channelName}</p>
                        <p className="text-xs">5,6 mil inscritos</p>
                    </div>


                    {maxScreenSizeWidth < 768 ? (
                            <button className="w-12 h-12 rounded-full flex items-center justify-center">
                                 <IoIosNotificationsOutline size={20}/>
                            </button>
                        ):(
                            <button className="bg-black rounded-full flex items-center justify-center p-2">
                                <p className="text-white text-sm">Inscrever-se</p> 
                            </button>  
                        )}
                     
                   
                </div> 

                <div className="flex gap-2">
                    <button className="bg-zinc-200 rounded-3xl flex items-center justify-center p-2 gap-1">
                            <RiShareForwardLine size={20}/>
                            <p className="text-sm font-bold"> Compartilhar </p>
                    </button>  

                    <button className="bg-zinc-200 rounded-3xl flex items-center justify-center p-2 gap-1">
                            <RiScissorsLine size={20}/>
                            <p className="text-sm font-bold"> Clipe </p>
                    </button>  

                  


                    <button className="bg-zinc-200 rounded-3xl flex items-center justify-center p-2 gap-1">
                            <IoIosMore  size={20}/>
                    </button>  

                </div>
          	
            </div>



            <div className="flex text-wrap flex-col rounded-lg bg-stone-200 p-2">
                    <div className="flex gap-2">
                            <p className="text-sm  font-bold"> {formatarNumero(views)} visualizações - </p>
                            <p className="text-sm  font-bold"> {calcularDiferencaDatas(timing)}</p>
                     </div>

                     <p className="text-sm"> 
                        {sinopse}
                     </p>
            </div>
           
            <div className="flex flex-col w-full gap-3 ">
                <div className="flex w-full items-center gap-4">
                    <p className="text-lg font-bold"> 2.121 comentários </p>

                    <div className="flex gap-1">
                        <BsFilterLeft size={25}/>
                        <p className="text-base"> Ordenar por </p> 
                    </div>    
                </div>
                        
                <div className="flex w-full items-center gap-1">  
                    <div className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center text-white 	"> 
						W 
					</div>

                    <input className=' w-full border-b px-5 py-2.5 focus:border-b-2 text-sm' placeholder="Adicione um comentário"/>
                </div>

                <div className="w-full flex flex-col gap-4"> 
                    {comentarios.map(({usuario, comentario,numero_like,timing}) => (
                        <div className="w-full flex gap-2">
                            <img src="thumb.webp" className="w-8 h-8 text-white rounded-full"/> 
                        
                            <div className="flex flex-col gap-3"> 
                                <div className="flex items-center gap-2"> 
                                    <a className="text-xs font-bold"> {usuario}</a>

                                    <p className="text-xs text-slate-600"> {calcularDiferencaDatas(timing)}</p>
                                </div>

                                <div className="flex flex-wrap">
                                    <p className="text-sm"> {comentario} </p>
                                </div> 

                                
                                <div className="flex items-center gap-2">
                                    <BiLike className='cursor-pointer' size={23}/>
                                    <p className="text-xs"> {numero_like} </p>

                                    <BiDislike className='cursor-pointer' size={23}/>
                                   
                                </div>      
                            </div> 
                        </div> 
                        
                      
                    ))}
                </div> 

            </div>

        </div>
    )
}

