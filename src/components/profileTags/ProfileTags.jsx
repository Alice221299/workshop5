import React, { useEffect, useState } from 'react'
import getPosts from '../../services/postsService'
import { getSession } from '../../services/sessionService'

const ProfileTags = () => {
    const [posts, setPosts] = useState()
    const user = getSession()

    useEffect(() => {
        getAllPosts()
        if (posts) {
            const taggedPosts = posts.filter(post => post.tags.find(tag => tag === user.id))
            setPosts(taggedPosts)
        }
    }, [])

    

    const getAllPosts = async () => {
        const response = await getPosts()
        setPosts(response)
        console.log(response);
    }
  return (
    <div>
        {posts &&
            posts.map((post) => (
                <figure className='pictures-element' key={post.id}>
                    <img  src={post.image} alt="Image" />
                </figure>
            ))
        }
    </div>
  )
}

export default ProfileTags