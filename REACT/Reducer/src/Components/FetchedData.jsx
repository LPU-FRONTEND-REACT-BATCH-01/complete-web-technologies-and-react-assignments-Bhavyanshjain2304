import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataThunk } from '../RTK/fetchDataThunk'

const FetchedData = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.fetchData )

    useEffect(()=>{
        dispatch(fetchDataThunk("mens-shirts"))
    },[dispatch])


    console.log(data)

  return (
    <div>FetchedData</div>
  )
}

export default FetchedData