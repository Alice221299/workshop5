import React, { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const PrivateRouter = ({isAutenticated}) => {

  const navigate = useNavigate()

// useEffect(() => {
// if (!isAutenticated) {
//   navigate("/login")
// }
// },[])

  return (
    <div>{
        // isAutenticated && <Outlet /> 
        isAutenticated ? <Outlet/> : <Navigate to={"/login"}/>
      }</div>
  )
}

export default PrivateRouter