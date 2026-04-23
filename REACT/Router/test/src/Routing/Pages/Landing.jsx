import React from 'react'
import { useNavigate } from 'react-router'

const Landing = () => {

  const navigate = useNavigate()

  let handleCLick = () =>{
    navigate('/profile')
  }
  return (
    <div>Landing
      <button onClick={handleCLick}>Click to visit Cart</button>
    </div>
  )
}

export default Landing