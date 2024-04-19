import { useMemo } from "react";
import ReactPlayer from "react-player"
import { useLocation } from "react-router-dom";
import { videos } from "../Home/utils";
import { VideoInfo } from "../../components/video_infos";
import ThumbnailContainer from "../../components/thumbnail";

export const Watch = () => {
    const location = useLocation();

 
    const video_url = String(new URLSearchParams(location.search).get('v'));

    const videoContent = useMemo(() => {
        return videos[1]
    },[video_url])

    const maxScreenSizeWidth = window.innerWidth;
   
    return (
        <div className="p-4 h-full w-full flex gap-5 max-lg:flex-col">
            <div className="flex flex-col h-full rounded-lg w-9/12 max-lg:w-full gap-2 "> 
                <ReactPlayer width='100%' height='70%'url={video_url} controls/>

                <div className="w-full">
                    <VideoInfo {...videoContent} 
                    sinopse={`
                    Sinopse oficial: "Desde que testemunhou o "Pequeno Gigante" e suas incríveis habilidades na quadra de vôlei, o jovem Shoyo Hinata ficou encantando com toda a natureza dinâmica do esporte! Mesmo que sua tentativa de estrear como jogador regular de vôlei durante um torneio do ensino médio tenha dado errado, ele deseja provar que sua falta de altura não deixa de ser um obstáculo diante de sua pura vontade e perseverança!"
                    `}
                    />
                </div>
            </div>
            
            <div className="rounded-lg w-3/12 grid grid-cols-1 gap-4 max-lg:w-full"> 
                {videos.map(elem => (
                    <ThumbnailContainer {...elem} noThumbFoto dontSetShowVideo horizontal={maxScreenSizeWidth >= 768} />
                ))}
            </div>
        </div> 
   )

}