import { FooterOptions } from "../../../../utils/sidebar"

export const Footer = () => {
    return (
        <div className="fixed p-1 bottom-0 w-full flex items-center justify-around bg-white">
             {FooterOptions.map(({icon,name}) => (
                <div className="flex flex-col items-center">
                    {icon}
                    <p className="text-xs"> {name}</p>
                </div>
             ))}      
                <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-green-700 flex items-center justify-center text-white 	"> 
                        <p className="text-xs"> w </p> 
                    </div> 
                     <p className="text-xs"> você </p>
                </div>
                

        </div>
    )
}
