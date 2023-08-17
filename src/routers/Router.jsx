import React, { createContext, useEffect, useReducer, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home from '../pages/home/Home'
import { initialUser, userReducer } from '../reducers/useReducer';
import Login from '../pages/login/Login';
import Layout from '../components/layout/Layout';
import Profile from '../pages/profile/Profile';
import Publication from '../pages/publication/Publication';
import { getSession } from '../services/sessionService';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';
import ProfilePhotos from '../components/profilePhotos/ProfilePhotos';
import ProfileAlbum from '../components/profileAlbum/ProfileAlbum';
import ProfileTags from '../components/profileTags/ProfileTags';
import ProfileVideos from '../components/profileVideos/ProfileVideos';

export const AppContext = createContext({});

const Router = () => {

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const user = getSession()
        if (user?.name) {
            userDispatch({
            type: "login",
            payload: {
                isAutenticated: true,
                user: user
            }})
            console.log(user)
        }
    }, [])

    const handleLogout = () => {
        sessionStorage.clear();
        userDispatch({
            type: "logout",
            payload: {
                isAutenticated: false,
                user: initialUser
            }})
      };

    const [userLogin, userDispatch] = useReducer(userReducer, initialUser)
    const globalState = {user: {
        userLogin,
        userDispatch
    }, handleLogout, posts, setPosts}

  return (
    <AppContext.Provider value={globalState}>
    <BrowserRouter>
        <Routes>
        <Route path='/'>
                <Route element={<PublicRouter isAutenticated={userLogin.isAutenticated}/>}>
                    <Route path='login' element={<Login/>}/>
                </Route>

                <Route element={<PrivateRouter isAutenticated={userLogin.isAutenticated}/>}>
                    <Route element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path='profile' element={<Profile/>}>
                            <Route path='photos' element={<ProfilePhotos/>}/>
                            <Route path='videos' element={<ProfileVideos/>}/>
                            <Route path='album' element={<ProfileAlbum/>}/>
                            <Route path='tags' element={<ProfileTags/>}/>
                        </Route>
                        <Route path='publication' element={<Publication/>}/>
                    </Route>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  )
}

export default Router