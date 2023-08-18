import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import { editUser, getUserPost } from "../../services/userService";
import arrow from "/images/arrow-back.svg";
import "./other.scss"
import { getSession } from "../../services/sessionService";
import { AppContext } from "../../routers/Router";

const OtherProfile = () => {

    const { idUser } = useParams();
    const {clickedUser, setClickedUser} = useContext(AppContext)
    const [follow, setFollow] = useState()
    const navigate = useNavigate();
    const loggedUser = getSession();

    useEffect(() => {
        findUser()
    }, [follow])

    useEffect(() => {
        validateFollow()
        navigate(`/${clickedUser?.id}/profile/user-photos`)
    }, [clickedUser])

    const findUser = async() => {
        const resp = await getUserPost(idUser)
        setClickedUser(resp)
        // validateFollow()
    }

    const onClickBack = () => {
        navigate("/");
      };
    
      const validateFollow = () => {
        if (clickedUser && clickedUser.followers) {
        const response = clickedUser.followers.some((item) => item == loggedUser.id);
        setFollow(response);
        }
      };
    
      const handleSeleccionFollows = async (state) => {
        
        // const response = await getPosts();
        // const filterPost = response.filter(item => item.id == post.id)
        if(state){
          const newFollower = [...clickedUser.followers, loggedUser.id];
          const newPost = {
            followers: newFollower
          }
          const response = await editUser(newPost, clickedUser.id);
          if (response) {
            setFollow(true);
          }
          
        }else{
          const removeFollow = clickedUser.followers.filter(item => item !== loggedUser.id)
          const remove = {
            followers: removeFollow
          }
          const response = await editUser(remove, clickedUser.id);
          if (response) {
            setFollow(false);
          }
        }
      };

  return (
    <div>
      <div className="profile-info">
        <div
          className="profile-background"
          style={{
            backgroundImage: `url(${clickedUser?.background})`,
          }}
        ><figure className="icon-back">
            <img src={arrow} alt="Icon for arrow back" onClick={onClickBack} />
        </figure>
          <img
          className="profile-avatar"
          src={clickedUser?.avatar}
          alt={clickedUser?.name}
        />
        </div>
      <div className="user-info">
        <div className="info-numbers">
          <div>
            <span>{clickedUser?.followers?.length}</span>
            <p>Followers</p>
          </div>
          <div>
            <span>10</span>
            <p>Likes</p>
          </div>
        </div>
        <div className="user-info-name">
          <h3>{clickedUser?.name}</h3>
          <p>Hello</p>
          <p>Follow me and like</p>
        </div>
        <div className="profile-buttons">
          {
            follow? <button onClick={() => handleSeleccionFollows(false)}>Following</button>
             : <button onClick={() => handleSeleccionFollows(true)}>Follow</button>
          }
          <button>Messages</button>
        </div>
      </div>
      </div>
      <div className='profile-filter'>
        <div className='profile-navbar'>
            <NavLink to='user-photos' className='profile-link'>Photos</NavLink>
            <NavLink to={clickedUser?.id} className='profile-link'>Videos</NavLink>
            <NavLink to='album' className='profile-link'>Album</NavLink>
            <NavLink to={clickedUser?.id} className='profile-link'>Tag</NavLink>
        </div>
        <Outlet/>
    </div>
    </div>
  );
};

export default OtherProfile;

export const OtherProfilePhotos = () => {
    const {clickedUser, setClickedUser} = useContext(AppContext)
  
    return (
      <div className='pictures-container'>
        {clickedUser && clickedUser.posts.length > 0 && clickedUser.posts.map((post) => (
          <figure className='pictures-element' key={post.id}>
              <img  src={post.image} alt="Image" />
          </figure>
        ))
        
        }
          
      </div>
    )
  }
