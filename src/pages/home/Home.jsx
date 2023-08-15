import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./home.scss";
import logof from "/logof.png";
import likehome from "/likehome.svg";
import comenthome from "/comenthome.svg";
import cart from "/perfil.png";
import cardImage from "/cardImage.png";
import text from "/text.svg";
import share from "/share.svg";
import savehome from "/savehome.svg";
import Carrusel from "../../components/carrusel/Carrusel";
import Nav from "../../components/nav/Nav";
import getPosts, { getPostUser } from "../../services/postsService";
import CardPost from "../../components/cardPost/CardPost";
const Home = () => {
  const navigate = useNavigate();
  const [listPost, setListPost] = useState();

  useEffect(() => {
    // post();
    postUser()
  }, []);

  // const post = async () => {
  //   try {
  //     const response = await getPosts();
  //     setListPost(response);
  //   } catch (error) {
  //     console.log(error);
  //     return [];
  //   }
  // };

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

  const handleClick1 = () => {
    navigate("/profile");
  };

  const handleClick2 = () => {
    navigate("/publication");
  };

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
      <button onClick={handleClick1}>Profile</button>
      <button onClick={handleClick2}>Publication</button>
      <div className="container-post">
      {/* {listPost?.map((info) => (
        <div key={info.id}>
          <CardPost info={info}/>
        </div>
        
      ))} */}
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
      

      {/* <Nav/> */}
    </div>
  );
};

export default Home;
