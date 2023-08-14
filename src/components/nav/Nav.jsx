import React from 'react'
import { useLocation } from 'react-router-dom';
import './nav.scss';
import home from '/house.svg';
import search from '/search.svg';
import more from '/more.svg';
import bell from '/bell.svg';
import user from '/user.svg';
const Nav = () => {
  const location = useLocation();
  const path = location.pathname;
 
  return (
    <>
    {/* {(path === "/" || path === "/publication") ? (
     <div className='nav'>
      NAVAR
     </div>
     ) : (
      ""
    )} */}
    <div className='nav'>
      <figure className='nav__menu'>
        <img className='icon' src={home} alt="" />
        <img className='icon' src={search} alt="" />
        <img className='more' src={more} alt="" />
        <img className='icon' src={bell} alt="" />
        <img className='icon' src={user} alt="" />
      </figure>
    </div>
    
    </>
  )
}

export default Nav