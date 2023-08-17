import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './nav.scss';
import home from '/house.svg';
import search from '/search.svg';
import more from '/more.svg';
import bell from '/bell.svg';
import user from '/user.svg';
import { AppContext } from '../../routers/Router';
const Nav = () => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const {user: {userLogin}} = useContext(AppContext)

  const handleProfile = () => {
    navigate('/profile')
  }
 
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
        <img className='icon image' src={userLogin?.user.avatar} alt="" onClick={handleProfile}/>
      </figure>
    </div>
    
    </>
  )
}

export default Nav