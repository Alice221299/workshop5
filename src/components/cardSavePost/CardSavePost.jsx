import React, { useContext, useEffect, useState } from 'react';
import savehome from "/savehome.svg";
import savePost from "/savePost.svg"
import { AppContext } from '../../routers/Router';

const CardSavePost = ({idPost}) => {

    const {user: {userLogin}} = useContext(AppContext);
    const [postGuardado, setPostGuardado] = useState(false);

    useEffect(() => {
        validateSavePosts();
    },[])

    const validateSavePosts =  () => {
        const response = userLogin.user?.posts.some(post => post == idPost);
        setPostGuardado(response);
      }

  return (
    <>
    {
        postGuardado ? <img src={savehome} alt="" /> : <img src={savePost} alt="" />
    }
    </>
  )
}

export default CardSavePost