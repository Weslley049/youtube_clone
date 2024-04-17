import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

interface CarouselProps {
    options: string[];
}

export const Carousel = ({options}: CarouselProps) => {
    return (
        <div className="relative flex justify-between w-full items-center overflow-x-auto gap-3">
            <button className="h-12 w-12 flex items-center justify-center rounded-full hover:bg-zinc-200">
                <MdOutlineKeyboardArrowLeft size={20}/>
            </button>


        
                <button className="h-auto w-auto rounded-lg bg-stone-200 p-1.5">
                        <p className="text-sm">Tudo</p>
                </button>

                {options.map(elem => (
                    <button className="h-auto w-auto   rounded-lg bg-stone-200 p-1">
                        <p className="text-sm">{elem} </p>
                    </button>
                ))}
          


            <button className="right-0 h-12 w-12 flex items-center justify-center rounded-full hover:bg-zinc-200">
                <MdOutlineKeyboardArrowRight size={20}/>
            </button>
        </div>
    )
}