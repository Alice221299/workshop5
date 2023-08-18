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
import {
  editComment,
  getComment,
  saveComment,
} from "../../services/commentService";
import { getAllUsers } from "../../services/usersAll";
import getPosts, { editPost, getPostUser } from "../../services/postsService";
import NewComment from "../../components/newComment/NewComment";
import CardLike from "../../components/cardLike/CardLike";


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
    fetchComment();
    fetchUsers();
    detailPost();
    handleNewComment();
  }, [userLogin]);

  const detailPost = async () => {
    const detail = await getPosts();
    const filter = detail.filter((post) => post.id == idPost);
    setPosted(filter);

    const userPost = await getUser(filter[0]?.userId);
    setPostUser(userPost);
  };

  const handleClick = () => {
    navigate("/");
  };
  //trae todos los comentarios del post actual
  const fetchComment = async () => {
    try {
      //este trae solo los comentarios del post actual
      const comments = await getComment();
      const response = await getPosts();
      const filterPost = response.filter((item) => item.id == idPost);
      if (filterPost?.length > 0) {
        // Verifica si hay una publicación actual
        const commentsForPost = comments?.filter(
          (comment) => comment.postId === filterPost[0].id
        );
        setCommentario(commentsForPost);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //para traer la lista de usuarios
  const fetchUsers = async () => {
    try {
      const usersList = await getAllUsers();
      setUsers(usersList);
    } catch (error) {}
  };

  //add comentario

  const handleNewComment = async () => {
    const response = await getPosts();
    const filterPost = response.filter((item) => item.id == idPost);
    if (newComment.trim() !== "") {
      if (userLogin.isAutenticated) {
        try {
          // Obtener la lista de comentarios existentes del backend
          const existingComments = await getComment();

          // calcular el id basado en los comentarios existentes
          const nextCommentId =
            Math.max(...existingComments.map((comment) => comment.id)) + 1;

          const nuevoComentario = {
            id: nextCommentId,
            postId: posted[0].id,
            userId: userLogin.user.id,
            text: newComment,
            timestamp: formattedTime,
          };

          const idComment = [...filterPost[0].commentsId, nextCommentId];
          const newComent = {
            commentsId: idComment,
          };

          const editCommentPost = await editPost(newComent, idPost);

          setCommentario([...comentario, nuevoComentario]);

          // Limpiar el campo de comentario
          setNewComment("");

          // Guardar el nuevo comentario en el backend
          saveComment(nuevoComentario);
        } catch (error) {
          console.log("Error al agregar un nuevo comentario:", error);
        }

        const nuevoComentario = {
          id: comentario.length + 1,
          postId: posted[0].id, //id del post actual
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

        {posted.length > 0 && (
          <figure key={posted[0].id} className="reactions">
            <div className="reaction">
              <CardLike post={posted[0]} />
            </div>

            <div className="reaction">
              <img src={comment} alt="" />
              <span>{posted[0].commentsId.length}</span>
            </div>

            <div className="reaction">
              <img src={share} alt="" />
              <span>{posted[0].tags.length}</span>
            </div>
          </figure>
        )}
      </div>

      {posted.length > 0 && <p key={posted[0].id}>{posted[0].caption}</p>}

      <NewComment
        posted={posted}
        comentario={comentario}
        users={users}
        infoUser={infoUser}
      />


      {userLogin.user && (
        <>
          <div className="coment">
            <figure className="photo">
              <img src={userLogin.user.avatar} alt="" />
            </figure>

            <div className="input-container">
              <input
                type="text"
                className="inputField"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder={`Escribe un comentario como ${userLogin.user.name}`}
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
