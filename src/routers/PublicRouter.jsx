import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRouter = ({isAutenticated}) => {
  return (
    <div>
        {
        isAutenticated ? <Navigate to={"/"}/> : <Outlet/>
    }
    </div>
  )
}

export default PublicRouter