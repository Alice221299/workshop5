import React from "react";
import "./publication.scss";
import card from "/card.jpeg";
import iconLeft from "/Vector.svg";
import iconRight from "/point.svg";
import like from "/like.svg";
import comment from "/comment.svg";
import share from "/share.svg";
import enviar from "/enviar.svg";
import { getOneUser, getUser } from "../../services/userService";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../routers/Router";
import { useNavigate, useParams } from "react-router-dom";
import { getComment, saveComment } from "../../services/commentService";
import { getAllUsers } from "../../services/usersAll";
import getPosts, { getPostUser } from "../../services/postsService";

const Publication = () => {
  const navigate = useNavigate();
  const {
    user: { userLogin },
  } = useContext(AppContext);
  const [infoUser, setInfoUser] = useState(null);
  const [comentario, setCommentario] = useState([]); //traer comentarios
  const [users, setUsers] = useState([]); //todos los usuarios
  const [newComment, setNewComment] = useState(""); //nuevo comentario
  const [postUser, setPostUser] = useState();
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const formattedTime = `${hour}:${minute}`;
  const { idPost } = useParams();
  const [posted, setPosted] = useState([]);

  useEffect(() => {
    // si el usuario esta autenticado obtengo los detalles
    if (userLogin.isAutenticated) {
      const fetchUserInfo = async () => {
        const detail = await getOneUser(
          userLogin.user.email,
          userLogin.user.password
        );
        setInfoUser(detail);
      };

      fetchUserInfo();
      fetchComment();
      fetchUsers();
    }
    detailPost();
  }, [userLogin]);

  const detailPost = async () => {
    const detail = await getPosts();
    const filter = detail.filter((post) => post.id == idPost);
    setPosted(filter);
    console.log("posted", filter);

    const userPost = await getUser(filter[0]?.userId);
    setPostUser(userPost);
    console.log("postuser", userPost);
  };

  const handleClick = () => {
    navigate("/");
  };
  //traer el comentario
  const fetchComment = async () => {
    try {
      const comments = await getComment();
      setCommentario(comments);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(comentario);

  //para traer la lista de usuarios
  const fetchUsers = async () => {
    try {
      const usersList = await getAllUsers();
      console.log(usersList);
      setUsers(usersList);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(users);

  //add comentario

  const handleNewComment = () => {
    if (newComment.trim() !== "") {
      if (userLogin.isAutenticated) {
        const nuevoComentario = {
          id: comentario.length + 1,
          postId: comentario.length + 1,
          userId: userLogin.user.id, // el id del usuario logueado
          text: newComment,
          timestamp: formattedTime,
        };

        setCommentario([...comentario, nuevoComentario]);
        console.log(nuevoComentario);

        // Limpiar el campo de comentario
        setNewComment("");
        saveComment(nuevoComentario);
      }
    }
  };

  return (
    <div className="containerPubli">
      {posted.length > 0 && (
        <figure key={posted[0].image} className="containerPubli__figure">
          <img src={posted[0].image} alt="" className="profile" />
          <img
            onClick={handleClick}
            src={iconLeft}
            alt="Icono Izquierdo"
            className="icon-left"
          />
          <img src={iconRight} alt="Icono Derecho" className="icon-right" />
        </figure>
      )}

      <div className="infoProfile">
        {postUser?.length > 0 && (
          <>
            <div key={postUser[0].id} className="user">
              <figure className="avatar">
                <img src={postUser[0].avatar} alt="" />
              </figure>
              <h2>{postUser[0].name}</h2>
            </div>
          </>
        )}
        <figure className="reactions">
          {posted.length > 0 && (
            <div key={posted[0].id} className="reaction">
              <img src={like} alt="" />
              <span>
                {posted[0].likes.map((like, index) => (
                  <span key={index}>{like}</span>
                ))}
              </span>
            </div>
          )}

          <div className="reaction">
            <img src={comment} alt="" />
            <span>14k</span>
          </div>
          <div className="reaction">
            <img src={share} alt="" />
            <span>14k</span>
          </div>
        </figure>
      </div>

      {posted.length > 0 && <p key={posted[0].id}>{posted[0].caption}</p>}

      <div className="comentarios">
        <span className="title">Comentarios:</span>

        {comentario.map((com, index) => {
          const commenterUser = users.find((user) => user.id === com.userId);
          return (
            <div className="comenta" key={index}>
              <div className="two">
                <figure className="avatar">
                  {commenterUser && <img src={commenterUser.avatar} />}
                </figure>
                <div className="answer">
                  <span className="nameUser">
                    {commenterUser ? commenterUser.name : "Desconocido"}
                    {infoUser && com.userId === infoUser.id ? (
                      <span> Tú</span>
                    ) : (
                      infoUser &&
                      infoUser.id === com.userId && <span>{infoUser.name}</span>
                    )}
                  </span>
                  <span className="textComm">{com.text}</span>
                </div>
              </div>
              <span className="timestamp">{com.timestamp}</span>
            </div>
          );
        })}
      </div>

      {infoUser && (
        <>
          <div className="coment">
            <figure className="photo">
              <img src={infoUser.avatar} alt="" />
            </figure>

            <div className="input-container">
              <input
                type="text"
                className="inputField"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder={`Escribe un comentario como ${infoUser.name}`}
              />
              <img
                onClick={handleNewComment}
                className="inputIcon"
                src={enviar}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Publication;
