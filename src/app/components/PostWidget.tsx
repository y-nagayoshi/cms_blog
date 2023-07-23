"use client"

import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'

import { PostWidgetProps, getSimilarPostsProps } from '@/types'
import { getRecentPosts,getSimilarPosts } from '@/util/index'

const PostWidget = ({categories,slug}:PostWidgetProps) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if(slug !== undefined && categories !== undefined){
      getSimilarPosts({categories, slug}).then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  
  }, [categories, slug])



  console.log(relatedPosts);
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        { slug ? 'Related Post' : 'Recent Post' }
      </h3>
      { relatedPosts.map((post:any) => (
        <div key={post.title} className='flex items-center w-full'>
          <div className='w-16 flex-none mb-4'>
            <Image 
              alt={post.title}
              height={60}
              width={60}
              className='align-middle rounded-full'
              src={post.featuredImage.url}
            />
          </div>

          <div className='flex-grow ml-4'>
            <p>
              {moment(post.createdAt).format('MMM DD. YYYY')}
            </p>
            <Link 
              href={`/post/${post.slug}`}
              className='text-md'
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))

      }
    </div>
  )
}

export default PostWidget