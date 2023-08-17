import React, { useContext } from 'react'
import text from "/text.svg";
import share from "/share.svg";
import savehome from "/savehome.svg";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../routers/Router';
import CardLike from '../cardLike/CardLike';
import CardSavePost from '../cardSavePost/CardSavePost';

const CardPost = ({ info }) => {

  const navigate = useNavigate();
  const {user: {userLogin}} = useContext(AppContext);

  const handlePublication = (idPost) =>{
    navigate(`${idPost}`)
  };

  return (
    <>
    {
      info?.posts?.map((date) => (
        <section 
        className="containerHome__card" 
        key={date.id} 
        onClick={() => handlePublication(date.id) }>
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
              <div className="reaction" >
                <CardLike post={date}/>
              </div>
              <div className="reaction">
                <img src={text} alt="" />
                <span>{date.commentsId.length}</span>
              </div>
              <div className="reaction">
                <img src={share} alt="" />
                <span>{date.tags.length}</span>
              </div>
            </figure>
            <figure>
              <CardSavePost idPost={date.id}/>
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