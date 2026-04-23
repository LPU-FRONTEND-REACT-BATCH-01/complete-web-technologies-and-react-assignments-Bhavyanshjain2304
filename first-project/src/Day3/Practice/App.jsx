import React, { useState,useEffect } from 'react'

const FetchingData = () => {

    const [data, setData] = useState(null);

    useEffect(() => { 
        let fetchData = async () => {
            try {
                let res = await fetch("https://jsonplaceholder.typicode.com/posts")
                if (res.ok){
                    let data = await res.json();
                    setData(data);
                }
                console.log(data);
            }
            catch (err) {
                console.log(err);
            }
            
        }
        fetchData();
    }, [])

    return (
        <div>
            <h1>Fetching Data</h1>
        </div>
  )
}

export default FetchingData;