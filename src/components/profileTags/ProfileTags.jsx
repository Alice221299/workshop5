import React, { useContext, useEffect, useState } from 'react'
import getPosts from '../../services/postsService'
import { getSession } from '../../services/sessionService'
import "./tags.scss"
import { AppContext } from '../../routers/Router'

const ProfileTags = () => {
    const {posts} = useContext(AppContext)
    const [taggedPosts, setTaggedPosts] = useState([])
    const user = getSession()

    useEffect(() => {
        findPosts()
    }, [])

    const findPosts = () => {
        if (posts) {
            const taggedUserPosts = posts.filter(post => post.tags.find(tag => tag === user.id))
            setTaggedPosts(taggedUserPosts)
            console.log(taggedPosts);
        }
    }

  return (
    <div className='pictures-container'>
        {posts && taggedPosts.length > 0 &&
            taggedPosts.map((post) => (
                <figure className='pictures-element' key={post.id}>
                    <img  src={post.image} alt="Image" />
                </figure>
            ))
        }
    </div>
  )
}

export default ProfileTags