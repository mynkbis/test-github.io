import React, { useEffect, useState } from 'react'

const useScrollBottom = () => {
    const [last, setLast] = useState();

    useEffect(() => {
    
        const handleScroll = () => {
            const bottom = document.documentElement.clientHeight + document.documentElement.scrollTop >= (document.documentElement.scrollHeight - 10);
       setLast(bottom)
        }

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
    return (
        last
    )
}

export default useScrollBottom


// 1. true/false on viewport(if elem is visible)
// 2. browser info(device, time local, geolocation)
