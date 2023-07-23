'use client'

import React from 'react';
import { useParams } from 'next/navigation'

import { getPosts, getPostDetails } from '@/util';
import { Categories, PostDetail, PostWidget, Author, Comments, CommentsForm } from '@/app/components';

import { getRecentPosts,getCategories } from '@/util';

import Test from '@/app/components/test';

import { useState } from 'react';

// export default async function Page ()  {
export default function Page ()  {

    const slug = useParams().slug;
    console.log(slug);
    // const post = getPosts();
    // const data = await getPostDetails('react-testing');
    // console.log(post);

    interface State {
        test: string;
      }

    return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='col-span-1 lg:col-span-8'>
                <div>
                    {/* <pre>
                        {JSON.stringify(post, null, 2)}
                    </pre> */}

                    {/* {
                        posts.map((post:any) => (
                            post.title
                        ))
                    } */}

                    {/* <Test 
                        slug={slug}
                    /> */}

                </div>

            {/* <PostDetail post={post} /> */}
            {/* <Author author={post.auther} /> */}
            {/* <AdjacentPosts slug={post.slug} createdAt={post.createdAt} /> */}
            {/* <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} /> */}
            </div>
            <div className='col-span-1 lg:col-span-4'>
                <div className='relative lg:sticky top-8'>
                    {/* <PostWidget slug={post.slug} categories={post.categories.map((category: any) => category.slug)}/>
                    <Categories /> */}
                </div>
            </div>

        </div>
        
    </div>
    )
}


// export default Page

// export async function generateStaticParams() {
//     const posts = await fetch('https://.../posts').then((res) => res.json())
   
//     return posts.map((post) => ({
//       slug: post.slug,
//     }))
//   }