// 'use client'

import Image from 'next/image'
import { posts } from '../constants'
import { Categories, PostCard, PostWidget } from './components'

import { getPosts } from '@/util'

export default async function Home() {
  const posts  = await getPosts();

  return (
    <main>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 '>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post,index) => (
            <PostCard 
              post={post.node}
              key={index}
            />
          ))}
        </div>

      <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8'>
              <PostWidget />
              <Categories />
            </div>
      </div>

      </div>

    </main>
  )
}