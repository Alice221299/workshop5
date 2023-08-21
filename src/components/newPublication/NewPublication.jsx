import React, { useContext } from "react";
import close from "/images/close.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './newPublicacion.scss';
import { AppContext } from "../../routers/Router";
import { getAllUsers } from "../../services/usersAll";
import { savePost } from "../../services/postsService";
import Swal from "sweetalert2";

const NewPublication = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    user: { userLogin },
  } = useContext(AppContext);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  const onSubmit = async (data) => {

    const users = await getAllUsers();
    const filter = users.filter(user => user.username == data.tags);
    const idTags = filter.length > 0 ? filter[0].id : null
    const newPost = {
      userId: userLogin.user.id,
      image: data.image,
      video: "",
      caption: data.caption,
      likes: [],
      commentsId: [],
      tags: idTags !== null ? [idTags] : []
    }
    const response = await savePost(newPost);
    if(response){
      Swal.fire(
        "Publicación Registrada",
        "La Publicación fue registrada con exito",
        "success"
      );
    }else{
      Swal.fire(
        'Publicación no registrada',
        'Hubo un problema al registrar la Publicación',
        'error'
      );
    }
  }

  return (
    <div className="new-form--container">
      <form className="new-form" onSubmit={handleSubmit(onSubmit)}>
        <figure className="form-close" onClick={handleClose}>
          <img src={close} alt="Icon for close" />
        </figure>
        <h2>Agregar Publicación</h2>
        <label>Imagen</label>
        <input
          {...register("image", { required: true })}
          type="text"
          name="image"
          placeholder="Ingrese la url de la imagen"
        />
        <label>Pie de foto</label>
        <input
          {...register("caption", { required: true })}
          type="text"
          name="caption"
          placeholder="Escribe un pie de foto"
        />
        <label>Etiqueta Personas</label>
        <input
          {...register("tags", { required: true })}
          type="text"
          name="tags"
          placeholder="Escribe el usuario que desea etiquetar"
        />
        <button type="submit">Publicar</button>
      </form>
    </div>
  );
};

export default NewPublication;
