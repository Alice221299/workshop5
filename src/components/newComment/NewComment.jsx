import React, { useEffect } from "react";
import "./newComment.scss";
const NewComment = ({ posted, comentario, users, infoUser }) => {
  useEffect(() => {}, []);

  const validateComment = () => {
    
  };

  return (
    <div className="comentarios">
      <span className="title">Comentarios:</span>

      {posted.length > 0 &&
        comentario.map((com, index) => {
          // para ver si el postId del comentario coincide con el id de la publicación actual
          if (com.postId === posted[0].id) {
            const commenterUser = users.find((user) => user.id === com.userId);
            return (
              <div className="comenta" key={index}>
                <div className="two">
                  <figure className="avatar">
                    {commenterUser && <img src={commenterUser.avatar} alt="" />}
                  </figure>
                  <div className="answer">
                    <span className="nameUser">
                      {commenterUser ? commenterUser.name : "Desconocido"}
                      {infoUser && com.userId === infoUser.id ? (
                        <span> Tú</span>
                      ) : (
                        infoUser &&
                        infoUser.id === com.userId && (
                          <span>{infoUser.name}</span>
                        )
                      )}
                    </span>
                    <span className="textComm">{com.text}</span>
                  </div>
                </div>
                <span className="timestamp">{com.timestamp}</span>
              </div>
            );
          } else {
            return null; // no muestra el componente si no pertenece a la publicacion
          }
        })}
    </div>
  );
};

export default NewComment;
