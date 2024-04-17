import { useRef, useState } from "react";

const useHeader = () => {
    const [searchQuery, setSearchQuery] = useState<string>();

    const maxScreenSizeWidth = window.innerWidth;

	const inputRef = useRef(null as any);
	const buttomRef = useRef(null as any);
	
	if(inputRef.current && buttomRef.current) {
		inputRef.current.addEventListener('keydown', (event: any) => {
	
			if (event.keyCode === 13) {
			  event.preventDefault();
			  buttomRef.current.click();
			
			}
		  });
	}


    return {
        maxWidth: maxScreenSizeWidth,
        search_query: searchQuery,
        setSearchQuery,
        inputRef,
        buttomRef

    }
	

	

}


export default useHeader;