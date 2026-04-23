import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ViewMore = () => {
    const paramData = useParams()

    const [data,setData] = useState({})
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const res = await axios.get(`https://dummyjson.com/products/${paramData.id}`)
                console.log(res)
                setData(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[paramData.id])
  return (
    <div>
        <h3>{data.id}</h3>
        <h3>{data.title}</h3>
        <h3>{data.description}</h3>
    </div>
  )
}

export default ViewMore