import React, { useEffect, useState } from 'react'

const useViewPort = () => {
    const [inside, setInside] = useState();
    // div is accessed using id
 const box = document.querySelector('#sorting');
    
 function isInViewport(elm) {
    const rect = elm?.getBoundingClientRect();
    return (
        rect?.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

  document.addEventListener('scroll', function () {
    isInViewport(box) ? setInside(true): setInside(false)

}, );
   return (
        inside
    )
}

export default useViewPort


// 1. true/false on viewport(if elem is visible)
// 2. browser info(device, time local, geolocation)






















// import React, { useEffect, useRef, useState } from 'react'

// const useViewPort = () => {

//     const listRef = useRef();
//     const [inside, setInside] = useState();
    
//     const box = document.querySelector('#sorting');
//     const rect = box?.getBoundingClientRect();
//     console.log("rect", rect)

//     const scrollTo = document.documentElement.scrollTop 

//     const handleScroll = () => {
//     const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    
   
//     if (rect && rect?.top >= -10 ) {
//          setInside(true)
//         } 
//     else {
//         setInside(false)
//         }
        

// //          if(rect?.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
// //       rect.right <= (window.innerWidth || document.documentElement.clientWidth))
// //          console.log("window.innerHeight", window.innerHeight, "window.innerWidth", window.innerWidth)
// //   console.log("bottom,",scrollHeight, scrollTop, clientHeight )
//   }
  
  
//     console.log("inside", inside)

//   useEffect(() => {
//   window.addEventListener("scroll", handleScroll);

//   return () => window.removeEventListener("scroll", handleScroll);
  
//   },[scrollTo]);

//    return (
//         inside   )
// }

// export default useViewPort;