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
    validateLike()
  }, []);

  const validateLike = () => {
    const response = post.likes.some((like) => like == userLogin.user.id);
    setPostLike(response);
  };

  return (
    <>
    {
        postLike ? <img src={like} alt="" /> : <img src={likehome} alt="" />
    }
      <span>{post.likes.length}</span>
    </>
  );
};

export default CardLike;
