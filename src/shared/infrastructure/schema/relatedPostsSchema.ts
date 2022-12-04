export const relatedPostsSchema = (categoryName: string): string => {
  return `
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
    }
  `;
};
