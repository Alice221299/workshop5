import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../routers/Router'
import { useForm } from 'react-hook-form'
import { getOneUser } from '../../services/userService'
import Swal from 'sweetalert2'
import { saveSession } from '../../services/sessionService'
import "./login.scss"

const Login = () => {

    const navigate = useNavigate()

    const {user: {userDispatch}} = useContext(AppContext)

    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = async(data) => {
        try {
            const user = await getOneUser(data.email, data.password)
            if (user) {
                Swal.fire('Bienvenide', `Bienvenide ${user.name}`, 'success').then(() => {
                userDispatch({
                    type: "login",
                    payload: {
                        isAutenticated: true,
                        user: user
                    }
                })
            saveSession(user)
            navigate('/')
            })
            }else {
                Swal.fire('Error', 'El usuario ingresado no existe.', 'error');
            }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <main className='d-flex justify-content-center align-items-center vw-100 vh-100 login'>
        <form className='card p-5 form-login' onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
            <label  className="form-label"><span >Email</span>
            <input type="email" className="form-control mt-2"  placeholder="Escriba su correo" {...register('email', {required: true})}/>
            </label>
        </div>
        <div className="mb-3">
            <label  className="form-label"><span >Contraseña</span>
            <input type="password" className="form-control mt-2"  placeholder="Escriba su contraseña" {...register('password', {required: true})}/>
            </label>
        </div>
        <button type="submit" className='btn login-button mb-4'>Iniciar sesión</button>
        <span className="text-white text-center d-block mb-2">
         ¿Deseas registrarte? 
         <hr />
         <Link to='/registro' className="text-dark">Registrar usuario</Link>
        </span>
        </form>
    </main>
  )
}

export default Login

