import React, { useContext, useEffect, useState } from "react";
import savehome from "/savehome.svg";
import savePost from "/savePost.svg";
import { AppContext } from "../../routers/Router";
import { editUser, getUser } from "../../services/userService";

const CardSavePost = ({ idPost }) => {
  const {
    user: { userLogin },
  } = useContext(AppContext);
  const [postGuardado, setPostGuardado] = useState(false);

  useEffect(() => {
    validateSavePosts();
  }, []);

  const validateSavePosts = async () => {
    const user = await getUser(userLogin.user.id);
    const filter = user[0].savePosts.some((post) => post == idPost);
    setPostGuardado(filter);
  };

  const handleSavePost = async (post) => {
    console.log(post);
    const response = await getUser(userLogin.user.id);
    if(post){
      const removePost = response[0].savePosts.filter(item => item !== idPost);
      console.log(removePost)
      const remove = {
        savePosts: removePost
      }
      const edit = await editUser(remove, userLogin.user.id)
      setPostGuardado(false)
    }else{
      const newPost = [...response[0].savePosts, idPost]
      const add = {
        savePosts: newPost
      }
      const edit = await editUser(add, userLogin.user.id)
      setPostGuardado(true)
    }
  };

  return (
    <>
      {postGuardado ? (
        <img src={savehome} alt=""
        onClick={() => handleSavePost(true)} />
      ) : (
        <img src={savePost} alt="" 
        onClick={() => handleSavePost(false)}/>
      )}
    </>
  );
};

export default CardSavePost;
