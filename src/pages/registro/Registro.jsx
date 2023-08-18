import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../../routers/Router";
import Swal from "sweetalert2";
import { saveUser } from "../../services/usersAll";
import { useNavigate } from "react-router-dom";

const Registro = () => {
  const {
    user: { userDispatch },
  } = useContext(AppContext);
const navigate =useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.followers = [];
    data.posts = [];
    data.savePosts = [];
    console.log("Valores del formulario:", data);
    
    const response = await saveUser(data);
    if(response){
      Swal.fire(
        "Usuario Registrado",
        "El Usuario fue registrado con exito, puedes iniciar sesión",
        "success"
      ).then((result) =>{
        if(result.isConfirmed){
            navigate('/login');
        }
      })
    }else{
      Swal.fire(
        'Usuario no registrado',
        'Hubo un problema al registrar el usuario',
        'error'
      );
    }
  };


  return (
    <main className="d-flex justify-content-center align-items-center vw-100 vh-100 login">
      <form className="card p-5 form-login"
      onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3">
          <label className="form-label">
            <span>Nombre para tu red</span>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Escriba su username"
              {...register("username", { required: true })}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>Nombre</span>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Escriba su nombre"
              {...register("name", { required: true })}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>Email</span>
            <input
              type="email"
              className="form-control mt-2"
              placeholder="Escriba su correo"
              {...register("email", { required: true })}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>Contraseña</span>
            <input
              type="password"
              className="form-control mt-2"
              placeholder="Escriba su contraseña"
              {...register("password", { required: true })}
            />
          </label>
        </div>
        <div className="mb-1">
          <label className="form-label">
            <span>Foto de perfil</span>
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Escriba el enlace de su imagen"
              {...register("avatar", { required: true })}
            />
          </label>
        </div>
        <button type="submit" className="btn login-button mt-4">
          Registrate
        </button>
      </form>
    </main>
  );
};

export default Registro;
