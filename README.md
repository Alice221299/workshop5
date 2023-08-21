# Nombre del proyecto: Red social

Aplicación de web findy que es un tipo de red social que permite interacruar entre los usuarios, ver publicaciones, agregar comentarios, subir publicaciones, entre otros.


## Configuración

1. Clona este repositorio: 'git clone https://github.com/Alice221299/workshop5'
3. Abre una nueva terminal en Visual Studio Code
2. Instala las dependencias con: 'npm install'


## Uso

1. Ejecuta la aplicación con: 'npm run dev' 
2. Abre tu navegador en: 'http://localhost:5173/'
3. Estas son algunas credenciales de usuarios que se encuentran en el back para que puedas acceder ingresando correo y contraseña:

    "email": "anna@gmail.com",
    "password": "anna123",

    "email": "snaidy@gmail.com",
    "password": "snaidy123",

    "email": "stefannya@gmail.com",
    "password": "stefannya123",

4. También puedes registrarte si eres nuevo usuario e iniciar sesión posterior a ello.
5. En el home (vista principal) se visualiza el carrusel con las fotos de los usuarios registrados en la aplicación con sus respectivos nombres. Y la foto principal de el usuario que inicio sesión.
6. En las posts visualizados en el inicio puese dar like a la publicación y para ingresar a realizar un comentario debes dar click en la foto como tal, allí te redirige a la publicación, cuando escribas el comentario para publicarlo deber dar click en el boton de enviar en el input.
7. Puedes devolverte al home y si deseas guardar un post da click en el icono de guardar. Si deseas ver los post guardados por cada usuario: https://miniback-workshop5.onrender.com/users
8. Puedes dar click en el icono de la foto de la persona quien publicó el post y te dirige a la información de su perfil.
9. En la parte del navbar puedes dar click en el icono de foto de perfil en la parte inferior derecha y te llevara a la información de tu perfil (del usuario quien haya iniciado sesión).
10. En el icono de MAS puedes añadir un post o publicación y etiquetar a alguien.
11. En el componete de perfil el cual se abre cuando das click a la foto de perfil en el nav o en la foto de perfil del usuario dueño del post, puedes editar tu perfil dando click en los 3 puntitos de la parte superior derecha. Puedes editar el nombre, nombre de usuario y tu foto de perfil.
11. También puedes cerrar sesión.
12. En esta misma sección del perfil puedes hacer un filtrado por las fotos que tiene el usuario, fotos etiquetadas...

13. Si quieres verificar como van cambiando en el back los valores:
-- usuarios: https://miniback-workshop5.onrender.com/users
-- posts o publicaciones: https://miniback-workshop5.onrender.com/posts
-- comentarios: https://miniback-workshop5.onrender.com/comentarios 

## Funcionalidades

- Inicio de sesión de usuarios.
- Edición de perfil.
- Publicación de posts.
- Agregar comentarios a publicaciones.
- Filtrado de fotos, videos, album y tags.


## Tecnologías, librerías y frameworks utilizados

- React Js: Biblioteca de JavaScript para construir interfaces de usuario interactivas y dinámicas.
- JavaScript: Lenguaje de programación ampliamente utilizado para la interacción del lado del cliente en aplicaciones web.
- SweetAlert: Biblioteca para mostrar mensajes de alerta atractivos y personalizables en la interfaz de usuario.
- SASS: preprocesador de hojas de estilo CSS
- Bootstrap: es un framework front-end utilizado para diseño de aplicaciones y sitios web.
- Se evidencia el uso de useReducer y appContext
- React router dom: libreria para el enrutamiento
- React hook form: biblioteca de gestión de formularios.
- Uso de hook personalizado como useSessionStorage

## Desarrolladores

- https://github.com/Alice221299
- https://github.com/snaidy
- https://github.com/stefannyaonofre