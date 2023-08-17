import React, { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import "./filter.scss"

const ProfileFilter = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/profile/photos')
  }, [])

  return (
    <div className='profile-filter'>
        <div className='profile-navbar'>
            <NavLink to='photos' className='profile-link'>Photos</NavLink>
            <NavLink to="videos" className='profile-link'>Videos</NavLink>
            <NavLink to='album' className='profile-link'>Album</NavLink>
            <NavLink to='tags' className='profile-link'>Tag</NavLink>
        </div>
        <Outlet/>
    </div>
  )
}

export default ProfileFilter