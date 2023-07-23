export interface PostCardProps {
    title: string;
    excerpt: string;
}

export interface graphCMSAPIProps {
  postsConnection: {
    edges: [
      {
        node: {
          auther: {
            bio: string;
            id: string;
            name: string;
            photo: {
              url: string;
            }
          },
          createdAt: string;
          slug: string;
          title: string;
          excerpt: string;
          featuredImage: {
            url: string;
          },
          categories: [
            {
              name: string;
              slug: string;
            }
          ]
        }
      }
    ]
  }
}

export interface PostWidgetProps {
  categories?: string[];
  slug?: string;
}

export interface getSimilarPostsProps {
  categories: string[];
  slug: string;  
}


export interface postProps {
  title: string,
  excerpt: string,
  featuredImage: {
      url: string
  },
  createdAt: string,
  slug: string,
  content: {
      raw: {
          children: [
              {
                  type: string,
                  children: [
                      {
                          text: string
                      }
                  ]
              }
          ]
      }
  },
  categories: [
      {
          name: string,
          slug: string
      }
  ],
  auther: {
      name: string,
      bio: string|null,
      photo: {
          url: string
      }
  }
}