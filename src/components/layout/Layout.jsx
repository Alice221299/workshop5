import React from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import Nav from '../nav/Nav'

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;
  const { idPost } = useParams();
  return (
    <div>
        <Outlet/>
        {(path === "/" || path === `/${idPost}`) ? (
     <Nav/>
     ) : (
      ""
    )}
        
    </div>
  )
}

export default Layout