import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useFetchData = (method, url, fData, header) => {
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(false);
  
    const authHeader = () => {
        return {
            header1: {
                'Content-Type': 'application/json',
                // "X-Auth-Token": `${header}`
            },
            
            header2:{
            "X-Auth-Token": header
            }
        }
    }
    
   useEffect(() => {
        let cancelRequest = false;
        setloading(true);
        const api = async () => {
            if (method) {
                try {
                    const fetchApi = await axios({
                        method: method,
                        url: url,
                        data: fData,
                        authHeader
                    })
                    if (cancelRequest) return;
                    const response = await fetchApi?.data;
                    setloading(false);
                    setData(response);
                }
                catch (error) {
                    if (cancelRequest) return;
                    setError(error);
                    setloading(false);
                }
            }
            // no method  provided then this block of code will run
            try {
                const fetchApi = await axios({
                    url: url,                  
                    authHeader
                })
                if (cancelRequest) return;
                const response = await fetchApi?.data;                
                setloading(false);
                setData(response);
            }
            catch (error) {
                if (cancelRequest) return;
                setError(error);
                setloading(false);
            }
        }
        api();
        
        return function cleanup() {
            cancelRequest = true;
        }
    }, [url]);

    return {
        loading, data, error
    }
}

export default useFetchData

