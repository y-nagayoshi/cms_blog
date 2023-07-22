import Image from 'next/image'
import { posts } from '../constants'
import { Categories, PostWidget } from './components'

export default function Home() {
  

  return (
    <main>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12  bg-gray-100'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <div key={index}>
              {post.title}
              {post.excerpt}
            </div>
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
