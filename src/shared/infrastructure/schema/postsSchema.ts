export const postsSchema = (first: string, after: string, categoryName: string): string => {
  return `
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
    }
  `;
};
