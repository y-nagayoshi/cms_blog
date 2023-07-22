import React from 'react'
import { PostCardProps } from '../../types'

const PostCard = (post:PostCardProps) => {
  return (
    <div>
        { post.title }
        { post.excerpt }
    </div>
  )
}

export default PostCard