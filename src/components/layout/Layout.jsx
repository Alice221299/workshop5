import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../nav/Nav'

const Layout = () => {
  return (
    <div>
        <Outlet/>
        <Nav/>
    </div>
  )
}

export default Layout