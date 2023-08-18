import React from "react";

const OtherProfile = () => {
  return (
    <div>
      <div className="profile-info">
        <div
          className="profile-background"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)`,
          }}
        >
          <img src={arrow} alt="Icon for arrow back" onClick={onClickBack} />
        </div>

        <img
          className="profile-avatar"
          src={state.user?.avatar}
          alt={state.user?.name}
        />
      </div>
      <div className="user-info">
        <div className="info-numbers">
          <div>
            <span>{state.user?.followers.length}</span>
            <p>Followers</p>
          </div>
          <div>
            <span>10</span>
            <p>Likes</p>
          </div>
        </div>
        <div className="info-name">
          <h3>{state.user?.name}</h3>
          <p>Hello</p>
          <p>Follow me and like</p>
        </div>
        <div className="profile-buttons">
          <button>Follow</button>
          <button>Messages</button>
        </div>
      </div>
      <div className='profile-filter'>
        <div className='profile-navbar'>
            <NavLink to='photos' className='profile-link'>Photos</NavLink>
            <NavLink to="videos" className='profile-link'>Videos</NavLink>
            <NavLink to='album' className='profile-link'>Album</NavLink>
            <NavLink to='tags' className='profile-link'>Tag</NavLink>
        </div>
        <Outlet/>
    </div>
    </div>
  );
};

export default OtherProfile;
