import React, { useContext, useEffect, useReducer, useState } from "react";
import "./info.scss";
import arrow from "/images/arrow-back.svg";
import points from "/images/points.svg";
import { AppContext } from "../../routers/Router";
import { getSession, saveSession } from "../../services/sessionService";
import { useNavigate } from "react-router-dom";
import { editUser} from "../../services/userService";
import { initialUser, userReducer } from "../../reducers/useReducer";
import getPosts from "../../services/postsService";
import close from "/images/close.svg"
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ProfileInfo = () => {
  const [options, setOptions] = useState(false);
  const { handleLogout, posts, setPosts } = useContext(AppContext);
  const user = getSession();
  const [state, dispatch] = useReducer(userReducer, initialUser);
  const [openForm, setOpenForm] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    getAllPosts();
  }, []);

  // newUser{

  // }
  // dispatch({type: "update", payload: newUser})

  const getAllPosts = async () => {
    const response = await getPosts();
    setPosts(response);
    console.log(response);
  };

  const onClickBack = () => {
    navigate("/");
  };

  const {register, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = async (data) => {
    const newUser = {
      name: data.name,
      username: data.username,
      avatar: data.avatar
    };
    const newDispatch = {
        id: user.id,
        username: data.username,
        name: data.name,
        email: user.email,
        password: user.password,
        avatar: data.avatar,
        followers: user.followers,
        following: user.following,
        posts: user.posts,
        savePosts: user.savePosts
    }
    const response = await editUser(newUser, user.id)
      if (response) {
          Swal.fire('Usuario editado', `Usuario fue editado con exito`, 'success')
          dispatch({type: "update", payload: newDispatch})
          saveSession(state.user)
          setOpenForm(false)
      }else {
          Swal.fire('Error', `Hubo un problema al editar el usuario`, 'error')
  }
  }

  return (
    <div className="profile-info">
      <div
        className="profile-background"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)`,
        }}
      >
        <img src={arrow} alt="Icon for arrow back" onClick={onClickBack} />
        <img
          src={points}
          alt="Icon for more actions"
          onClick={() => setOptions(!options)}
        />
        {options && (
            <>
          <div className="profile-options">
            <p className="edit" onClick={() => setOpenForm(true)}>Edit profile</p>
            <p onClick={handleLogout}>Log Out</p>
            </div>
            {openForm && (
              <div className="new-form--container">
                <form className="new-form" onSubmit={handleSubmit(onSubmit)}>
                  <figure
                    className="form-close"
                    onClick={() => setOpenForm(false)}
                  >
                    <img src={close} alt="Icon for close" />
                  </figure>
                  <h2>Editar el usuario</h2>
                  <label>Nombre</label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    name="name"
                    placeholder="Ana"
                    defaultValue={state.user?.name}
                  />
                  <label>Nombre del usuario</label>
                  <input
                    {...register("username", { required: true })}
                    type="text"
                    name="username"
                    placeholder="anadetunja"
                    defaultValue={state.user?.username}
                  />
                  <label>Foto del perfil</label>
                  <input
                    {...register("avatar", { required: true })}
                    type="url"
                    name="avatar"
                    placeholder="https://image"
                    defaultValue={state.user?.avatar}
                  />
                  <button type="submit">Enviar</button>
                </form>
              </div>
            )}
          
        </>)}
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
        {/* <div className="profile-buttons">
          <button>Follow</button>
          <button>Messages</button>
        </div> */}
      </div>
    </div>
  );
};

export default ProfileInfo;
