import { aditionalInfos, optionsSideBarResponsive,  optionsSideBar } from "../../../../utils/sidebar"

export const SideBar = () => {
    

    const maxScreenSizeWidth = window.innerWidth;
     

    
    return (
        <div className="h-full w-full flex flex-col">
            {maxScreenSizeWidth >= 1440 ?  
                (Object.entries(optionsSideBar).map(([section, options]) => (
                <div className="border-b border-slate-300 p-3">
                    {!['principal', 'configs'].includes(section) &&
                    <p className="font-medium leading-10 text-black">{section}</p>}
                    {options.map(({name, icon}) => (
                         <button className=" w-full hover:bg-zinc-200 p-1 rounded-lg flex items-center gap-3 text-ellipsis">
                            {icon}
                            <p className=" text-sm font-sans leading-8"> {name} </p>
                        </button>
                    ))}
                </div>)))
                 : (
                   <div className="h-full w-full flex flex-col items-center">
                    {optionsSideBarResponsive.map(({name, icon}) => (
                    <button className="flex flex-col w-full hover:bg-zinc-200 p-2 rounded-lg items-center text-ellipsis"> 
                            {icon}
                            <p className=" text-xs font-sans leading-8"> {name} </p>
                        </button>
                    ))}
                    </div> 

                 )}

            {maxScreenSizeWidth >= 1440 && (
                <div className="flex flex-wrap gap-2 justify-start p-4"> 
                    {aditionalInfos.map((elem) => (
                        <a href="#" className="text-xs text-gray-500 font-bold no-underline"> {elem} </a>
                    ))}
                    <p className="text-xs text-gray-500 font-light"> © 2024 Google LLC</p>
                </div> 
            )}  
        
        </div> 
    )
}