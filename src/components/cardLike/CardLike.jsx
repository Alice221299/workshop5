import React, { useContext, useEffect, useState } from "react";
import likehome from "/likehome.svg";
import like from "/like.svg";
import { AppContext } from "../../routers/Router";
import getPosts, { editPost } from "../../services/postsService";

const CardLike = ({ post }) => {
  const {
    user: { userLogin },
  } = useContext(AppContext);
  const [postLike, setPostLike] = useState(false);

  useEffect(() => {
    validateLike();
  }, []);

  const validateLike = () => {
    const response = post.likes.some((like) => like == userLogin.user.id);
    setPostLike(response);
  };

  const handleSeleccionLikes = async (like) => {
    
    const response = await getPosts();
    const filterPost = response.filter(item => item.id == post.id)
    if(like){
      const newLIke = [...filterPost[0].likes, userLogin.user.id];
      const newPost = {
        likes: newLIke
      }
      const editPostLike = await editPost(newPost, post.id);
      setPostLike(true);
    }else{
      const removeLike = filterPost[0].likes.filter(item => item !== userLogin.user.id)
      const remove = {
        likes: removeLike
      }
      const editPostLike = await editPost(remove, post.id);
      setPostLike(false);
    }
  };

  return (
    <>
      {postLike ? (
        <img src={like} alt="" onClick={() => handleSeleccionLikes(false)} />
      ) : (
        <img src={likehome} alt="" onClick={() => handleSeleccionLikes(true)} />
      )}
      <span>{post.likes.length}</span>
    </>
  );
};

export default CardLike;
