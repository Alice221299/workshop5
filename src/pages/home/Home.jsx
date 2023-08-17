import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.scss";
import logof from "/logof.png";
import likehome from "/likehome.svg";
import comenthome from "/comenthome.svg";
import Carrusel from "../../components/carrusel/Carrusel";
import { getPostUser } from "../../services/postsService";
import CardPost from "../../components/cardPost/CardPost";
const Home = () => {
  const navigate = useNavigate();
  const [listPost, setListPost] = useState();

  useEffect(() => {
    postUser()
  }, []);

  const postUser = async () => {
    try {
      const response = await getPostUser();
      console.log(response)
      setListPost(response)
    } catch (error) {
      console.log(error);
      return []
    }
  }

  return (
    <div className="containerHome">
      <div className="containerHome__icons">
        <figure className="logo">
          <img src={logof} alt="" />
        </figure>
        <figure className="reaction">
          <img src={likehome} alt="" />
          <img src={comenthome} alt="" />
        </figure>
      </div>

      <Carrusel />
      <div className="container-post">
      {
        listPost?.map((post) => (
          post?.posts.length > 0 && (
            <div key={post.id}>
          <CardPost info={post}/>
        </div>
          ) 
        ))
      }
      </div>
    </div>
  );
};

export default Home;
