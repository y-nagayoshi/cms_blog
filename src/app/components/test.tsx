'use client'

import React from 'react';
import { useParams } from 'next/navigation'

import { getPosts, getPostDetails } from '@/util';
import { Categories, PostDetail, PostWidget, Author, Comments, CommentsForm } from '@/app/components';

import { getRecentPosts,getCategories } from '@/util';

// import { useParams } from 'next/navigation'

export default function Test ()  {
    const slug = useParams().slug;

    return (
        slug
    )
}