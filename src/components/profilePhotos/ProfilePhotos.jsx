import React, { useContext, useEffect, useState } from 'react'
import "./photos.scss"
import { AppContext } from '../../routers/Router'
import { getSession } from '../../services/sessionService'

const ProfilePhotos = () => {
  const [userPosts, setUserPosts] = useState([])
  const {posts} = useContext(AppContext)
  const user = getSession()

  useEffect(() => {
    findUserPosts()
  }, [])

  const findUserPosts = () => {
    if (posts) {
        const userFoundPosts = posts.filter(post => post.userId === user.id)
        setUserPosts(userFoundPosts)
        console.log(userFoundPosts);
    }
}
  return (
    <div className='pictures-container'>
      {posts && userPosts.length > 0 && userPosts.map((post) => (
        <figure className='pictures-element' key={post.id}>
            <img  src={post.image} alt="Image" />
        </figure>
      ))
      
      }
        
    </div>
  )
}

export default ProfilePhotos