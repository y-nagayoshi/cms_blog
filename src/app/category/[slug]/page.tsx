import React from 'react';

import { getPosts, getPostDetails } from '@/util';
import { Categories, PostWidget, PostCard, PostDetail} from '@/app/components';
import { getCategoriesPost } from '@/util';


export default async function Page ({ params }: { params: { slug: string } })  {
    const posts  = await getCategoriesPost( params.slug);

    return (
      <>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 '>
          <div className='lg:col-span-8 col-span-1'>
            {posts.map((post:any,index:any) => (
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
  
      </>
    )
}