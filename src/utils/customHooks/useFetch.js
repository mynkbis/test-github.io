import React, { useEffect, useState } from 'react'

const useFetchData = ( url ) => {
   const [productList, setProductList] = useState([]);
    
    useEffect(() => {
        fetch(url)
            .then((res) => res.json()
                .then((json) => setProductList(json)))
        
    }, [url])
    return (
            [productList]
        )
}

export default useFetchData