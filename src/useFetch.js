import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")
    
    useEffect(() => {
        // const abortCont = new AbortController();
        let isMounted = true;

        setTimeout(() => {
            fetch(url, /*{signal: abortCont.signal}*/)
            
            .then((res) => { 
                if (!res.ok) {
                    throw Error ('Could not fetch blogs......')
                }
                return res.json()
             })
              .then((data) => {
                if (!isMounted) return;

                  setData(data);
                  setIsLoading(false);
                  setError('')
              })
              .catch((err) => {

                // if (err.name === 'AbortError') {
                //     console.error("Fetch Aborted");
                // }
                setError(err.message);
                setIsLoading(false);
            })
        }, 600)

        return () => isMounted = false;
        }, [url]);

        return {data, isLoading, error};
}

export default useFetch;

