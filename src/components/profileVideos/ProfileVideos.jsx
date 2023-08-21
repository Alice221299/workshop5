import React, { useContext, useEffect, useState } from 'react'
import "./videos.scss"
import { AppContext } from '../../routers/Router'
import { getSession } from '../../services/sessionService'

const ProfileVideos = () => {

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
    }
}
  return (
    <div className='videos-container'>
      {posts && userPosts.length > 0 && userPosts.map((post) => (
        <iframe
        className='video'
        src={post.video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
    </iframe>
      ))
      
      }
        
    </div>
  )
}

export default ProfileVideos