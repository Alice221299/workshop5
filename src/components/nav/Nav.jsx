import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './nav.scss';
import home from '/house.svg';
import search from '/search.svg';
import more from '/more.svg';
import bell from '/bell.svg';
import user from '/user.svg';
import { AppContext } from '../../routers/Router';
import NewPublication from '../newPublication/NewPublication';
const Nav = () => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();
  const {user: {userLogin}} = useContext(AppContext);
  const [opened, setOpened] = useState(false);

  const handleProfile = () => {
    navigate('/profile')
  }

  const handleNewPublication = () => {
    setOpened(true)
    navigate('/newPublication')
  }

  const handleCloseForm = () => {
    setOpened(false);
  };
 
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
        <img className='more' src={more} alt="" onClick={handleNewPublication} />
        {/* {
          opened ? (<NewPublication onClose={handleCloseForm}/>) : ""
        } */}
        <img className='icon' src={bell} alt="" />
        <img className='icon image' src={userLogin?.user.avatar} alt="" onClick={handleProfile}/>
      </figure>
    </div>
    
    </>
  )
}

export default Nav