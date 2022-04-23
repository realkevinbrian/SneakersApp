import React,{useEffect, useState} from 'react'

export default function useFetch() {

    const [data, setData] = useState([]);


    useEffect(() => {

        fetch("http://localhost:3004/post")
        .then(req => req.json())
        .then(resp => setData(resp))
        .catch(error=> console.log(error))
        
        }, [])

        return data;

}
