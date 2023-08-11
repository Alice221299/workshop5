import React, { createContext, useEffect, useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import { initialUser, userReducer } from '../reducers/useReducer';
import Login from '../pages/login/Login';
import Layout from '../components/layout/Layout';
import Profile from '../pages/profile/Profile';
import Publication from '../pages/publication/Publication';
import { getSession } from '../services/sessionService';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';

export const AppContext = createContext({});

const Router = () => {

    

    useEffect(() => {
        const user = getSession()
        if (user?.name) {
            userDispatch({
            type: "login",
            payload: {
                isAutenticated: true,
                user: user
            }})
        }
    }, [])

    const [userLogin, userDispatch] = useReducer(userReducer, initialUser)
    const globalState = {user: {
        userLogin,
        userDispatch
    }}

  return (
    <AppContext.Provider value={globalState}>
    <BrowserRouter>
        <Routes>
        <Route path='/'>
                <Route element={<PublicRouter isAutenticated={userLogin.isAutenticated}/>}>
                    <Route index element={<Login/>}/>
                </Route>

                <Route element={<PrivateRouter isAutenticated={userLogin.isAutenticated}/>}>
                    <Route element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path='profile' element={<Profile/>}/>
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