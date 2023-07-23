import {request, gql} from 'graphql-request'
import { getSimilarPostsProps, graphCMSAPIProps } from '@/types';
import { graphql } from 'graphql';

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT || "";

export const getPosts = async () => {

  const query = gql`
  query Assets {
    postsConnection {
      edges {
        node {
          auther {
            bio
            id
            name
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
  `;

  const result:graphCMSAPIProps = await request(graphqlAPI, query);

  return result.postsConnection.edges;
}

export const getRecentPosts = async () => {
  const query = gql`
  query GetPostDetails() {
    posts(
      orderBy: createdAt_ASC
      last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
  }
` 

 const result:any = await request(graphqlAPI, query);

 return result.posts;
}

export const getSimilarPosts = async ({categories, slug}:getSimilarPostsProps) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]){
      posts(
        where: {slug_not: ${slug}, 
        AND: {cayegories_some: {slug_in: ${categories}}}}
        last: 3
      ){
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `

  const result:any = await request(graphqlAPI, query, { categories, slug });
  return result.posts;
}

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `

  const result:any = await request(graphqlAPI, query);
  return result.categories;
}

export const getPostDetails = async (slug:string) => {

  const query = gql`
  query GetPostDetails {
    post(where: {slug: "${slug}"}) {
      title
      excerpt
      featuredImage {
        url
      }
      createdAt
      slug
      content {
        raw
      }
      categories {
        name
        slug
      }
      auther {
        name
        bio
        photo {
          url
        }
      }
    }
  }
  
  `

  const result:any = await request(graphqlAPI, query);
  return result.post;
}

export const grpahCMSImageLoader = ({ src }:any) => src;