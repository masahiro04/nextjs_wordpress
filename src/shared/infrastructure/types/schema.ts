// 詳細ページの関連記事
export const relatedPosts = (categoryName: string): string => `
  query RelatedPosts {
    posts(first: 5, where: { categoryName: "${categoryName}" }) {
      edges {
        node {
          title
          excerpt
          content
          slug
          date
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          author {
            node {
              name
              firstName
              lastName
              avatar {
                url
              }
            }
          }
          categories {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }`;

// 詳細ページの記事
export const post = (): string => `
  fragment AuthorFields on User {
    name
    firstName
    lastName
    avatar {
      url
    }
  }
  fragment PostFields on Post {
    title
    excerpt
    slug
    date
    featuredImage {
      node {
        altText
        sourceUrl
      }
    }
    author {
      node {
        ...AuthorFields
      }
    }
    categories {
      edges {
        node {
          name
        }
      }
    }
  }
  query PostBySlug($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      ...PostFields
      content
      revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            content
            author {
              node {
                ...AuthorFields
              }
            }
          }
        }
      }
    }
  }
`;

// 一覧ページで全記事取得
export const allPosts = (first: string, after: string, categoryName: string): string => `
  query AllPosts {
    posts(first: ${first}, after: "${after}", where: { categoryName: "${categoryName}" }) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          title
          excerpt
          content
          slug
          date
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          author {
            node {
              name
              firstName
              lastName
              avatar {
                url
              }
            }
          }
          categories {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }`;

// 固定ページ
export const page = (url: string): string => `
  query Page {
    pageBy(uri: "${url}") {
      id
      content
      slug
      title
      date
      author {
        node {
          name
        }
      }
    }
  }`;
