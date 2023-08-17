import React, { useContext, useEffect, useState } from "react";
import likehome from "/likehome.svg";
import like from "/like.svg";
import { AppContext } from "../../routers/Router";

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

  const handleSeleccionLikes = (like) => {
    console.log("entre aca", like);
    if(like){
      setPostLike(false);
    }else{
      setPostLike(true);
    }
  };

  return (
    <>
      {postLike ? (
        <img src={like} alt="" onClick={() => handleSeleccionLikes(true)} />
      ) : (
        <img src={likehome} alt="" onClick={() => handleSeleccionLikes(false)} />
      )}
      <span>{post.likes.length}</span>
    </>
  );
};

export default CardLike;
