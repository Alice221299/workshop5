import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./filter.scss"

const ProfileFilter = () => {

  return (
    <div className='profile-filter'>
        <div className='profile-navbar'>
            <NavLink to='photos' className='profile-link'>Photos</NavLink>
            <NavLink className='profile-link'>Videos</NavLink>
            <NavLink to='album' className='profile-link'>Album</NavLink>
            <NavLink className='profile-link'>Tag</NavLink>
        </div>
        <Outlet/>
    </div>
  )
}

export default ProfileFilter