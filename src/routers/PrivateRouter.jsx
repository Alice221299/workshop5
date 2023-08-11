import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRouter = ({isAutenticated}) => {
  return (
    <div>{
        isAutenticated && <Outlet /> 
      }</div>
  )
}

export default PrivateRouter