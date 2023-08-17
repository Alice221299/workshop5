import React, { useContext } from 'react'
import "./photos.scss"
import { AppContext } from '../../routers/Router'

const ProfilePhotos = () => {

  const {userPosts} = useContext(AppContext)
  return (
    <div className='pictures-container'>
      {userPosts && userPosts.posts.length > 0 && userPosts.posts.map((post) => (
        <figure className='pictures-element' key={post.id}>
            <img  src={post.image} alt="Image" />
        </figure>
      ))
      
      }
        
    </div>
  )
}

export default ProfilePhotos