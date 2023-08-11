import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()

  const handleClick1 = () => {
    navigate('/profile')
  }

  const handleClick2 = () => {
    navigate('/publication')
  }
  return (
    <div>
      <button onClick={handleClick1}>Profile</button>
      <button onClick={handleClick2}>Publication</button>
    </div>
  )
}

export default Home