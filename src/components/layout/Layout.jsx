import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from '../nav/Nav'

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div>
        <Outlet/>
        {(path === "/" || path === "/publication") ? (
     <Nav/>
     ) : (
      ""
    )}
        
    </div>
  )
}

export default Layout