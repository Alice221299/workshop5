import React, { useContext, useEffect, useState } from 'react'
import "./info.scss"
import arrow from "/images/arrow-back.svg"
import points from "/images/points.svg"
import { AppContext } from '../../routers/Router'
import { getSession } from '../../services/sessionService'
import { useNavigate } from 'react-router-dom'

const ProfileInfo = () => {
    const [options, setOptions] = useState(false)
    const {globalState} = useContext(AppContext)
    const user = getSession()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(globalState, user);
    }, [])

    const onClickBack = () => {
        navigate('/')
    }
  return (
    <div className='profile-info'>
        <div className='profile-background' style={{backgroundImage: `url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)`}}>
            <img src={arrow} alt="Icon for arrow back" onClick={onClickBack}/>
            <img src={points} alt="Icon for more actions" onClick={() => setOptions(!options)}/>
            {options && 
                <div className='profile-options'>
                    <p>Edit profile</p>
                    <p>Log Out</p>
                </div>}
            <img className='profile-avatar' src={user.avatar} alt={user.name} />
        </div>
        <div className='user-info'>
            <div className='info-numbers'>
                <div>
                    <span>{user.followers.length}</span>
                    <p>Followers</p>
                </div>
                <div>
                    <span>10</span>
                    <p>Likes</p>
                </div>
            </div>
            <div className='info-name'>
                <h3>{user.name}</h3>
                <p>Hello</p>
                <p>Follow me and like</p>
            </div>
            <div className='profile-buttons'>
                <button>Follow</button>
                <button>Messages</button>
            </div>
        </div>
    </div>
  )
}

export default ProfileInfo