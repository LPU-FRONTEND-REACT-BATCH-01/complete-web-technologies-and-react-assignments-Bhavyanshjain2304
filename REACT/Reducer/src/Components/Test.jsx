import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change, increment } from '../RTK/counterSlice'

const Test = () => {
    const count = useSelector(state=>state.counter.count)
    const name = useSelector(state=>state.counter.name)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>{count}</h1>
        <h1>{name}</h1>
        <button onClick={()=>dispatch(increment())} >Increment</button>
        <button onClick={()=>dispatch(change("Chota Bheem"))} >Change Name</button>
    </div>
  )
}

export default Test