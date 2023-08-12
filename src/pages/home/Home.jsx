import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.scss";
import logof from "/logof.png";
import likehome from "/likehome.svg";
import comenthome from "/comenthome.svg";
import cart from "/perfil.png";
import cardImage from "/cardImage.png";
import text from "/text.svg";
import share from "/share.svg";
import savehome from "/savehome.svg";
const Home = () => {
  const navigate = useNavigate();

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

      <div>AQUI VA EL CARRUSEL</div>

      <section className="containerHome__card">
        <div className="containerHome__card-prof">
          <figure className="contain">
            <img className="usuaria" src={cart} alt="" />
          </figure>
          <span>Jennie Kim</span>
        </div>
        <figure className="imageCard">
          <img className="usered" src={cardImage} alt="" />
        </figure>
        <div className="containerHome__card-likes">
          <figure className="down">
            <div className="reaction">
              <img src={likehome} alt="" />
              <span>14k</span>
            </div>
            <div className="reaction">
              <img src={text} alt="" />
              <span>14k</span>
            </div>
            <div className="reaction">
              <img src={share} alt="" />
              <span>14k</span>
            </div>
          </figure>
          <figure>
            <img src={savehome} alt="" />
          </figure>
        </div>
      </section>

      {/* <button onClick={handleClick1}>Profile</button>
      <button onClick={handleClick2}>Publication</button> */}
    </div>
  );
};

export default Home;
