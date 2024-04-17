import { useLocation } from "react-router-dom";
import ThumbnailContainer from "../../components/thumbnail"
import { videos } from "../Home/utils"

const Results = () => {
    const location = useLocation();

 
    const search_query = String(new URLSearchParams(location.search).get('search_query'));
   
   
    const horizontal = window.innerWidth >= 768

   

    return (
        <div className="p-4 h-5/6 w-full"> 
            <div className="w-full h-full flex flex-col gap-3">
            {videos.filter(({title, channelName}) => title.includes(search_query) || channelName?.includes(search_query)).map(elem => (
                <div className="w-full">   
                    <ThumbnailContainer {...elem} horizontal={horizontal} sinopse={`
                        Sinopse oficial: "Desde que testemunhou o "Pequeno Gigante" e suas incríveis habilidades na quadra de vôlei, o jovem Shoyo Hinata ficou encantando com toda a natureza dinâmica do esporte! Mesmo que sua tentativa de estrear como jogador regular de vôlei durante um torneio do ensino médio tenha dado errado, ele deseja provar que sua falta de altura não deixa de ser um obstáculo diante de sua pura vontade e perseverança!"
                    `}/>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Results