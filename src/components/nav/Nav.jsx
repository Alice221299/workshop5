import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './nav.scss';
import home from '/house.svg';
import search from '/search.svg';
import more from '/more.svg';
import bell from '/bell.svg';
import { AppContext } from '../../routers/Router';
const Nav = () => {
  const navigate = useNavigate();
  const {user: {userLogin}} = useContext(AppContext);

  const handleProfile = () => {
    navigate('/profile')
  }

  const handleNewPublication = () => {
    navigate('/newPublication')
  };
 
  return (
    <>
    <div className='nav'>
      <figure className='nav__menu'>
        <img className='icon' src={home} alt="" />
        <img className='icon' src={search} alt="" />
        <img className='more' src={more} alt="" onClick={handleNewPublication} />
        <img className='icon' src={bell} alt="" />
        <img className='icon image' src={userLogin?.user.avatar} alt="" onClick={handleProfile}/>
      </figure>
    </div>
    
    </>
  )
}

export default Nav