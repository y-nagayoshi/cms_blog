import React from 'react';

import { getPosts, getPostDetails } from '@/util';
import { Categories, PostDetail, PostWidget, Author, Comments, CommentsForm, AdjacentPosts } from '@/app/components';

export default async function Page ({ params }: { params: { slug: string } })  {
    const post = await getPostDetails(params.slug);

    return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='col-span-1 lg:col-span-8'>
                    <PostDetail post={post} />
                    {/* <Author author={post.auther} /> 完成 */}
                    {/* <AdjacentPosts post={post} position='LEFT' /> */}
                    {/* <CommentsForm slug={post.slug} />
                    <Comments slug={post.slug} /> */}


                <div>
                {/* <pre>
                    {JSON.stringify(post, null, 2)}
                </pre> */}

                {/* <div>{post.title.name}</div> */}
                </div>
            </div>

            <div className='col-span-1 lg:col-span-4'>
                <div className='relative lg:sticky top-8'>
                    <PostWidget />
                    <Categories />
                </div>
            </div>

        </div>
        
    </div>
    )
}