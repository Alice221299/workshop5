import React, { useEffect, useState } from 'react'
import text from "/text.svg";
import share from "/share.svg";
import savehome from "/savehome.svg";
import likehome from "/likehome.svg";

const CardPost = ({ info }) => {

  const infoPosts = info;
  console.log(infoPosts)

  return (
  
    <>
    {
      info?.posts?.map((date) => (
        <section className="containerHome__card" key={date.id}>
          <div className="containerHome__card-prof">
            <figure className="contain">
              <img className="usuaria" src={info.avatar} alt="" />
            </figure>
            <span>{info.name}</span>
          </div>
          <figure className="imageCard">
            <img className="usered" src={date.image} alt="" />
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
          <div className="containPublication">
            <p className="caption"><span className="username">{info.name}</span> {date.caption}</p>
          </div>
        </section>
      ))
    }
    </>
  )
}

export default CardPost