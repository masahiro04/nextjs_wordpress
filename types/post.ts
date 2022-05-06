export interface Post {
  edges: Array<Node>;
}

// TODO(okubo): hasNextPageの対応まだなので、この辺り必須

interface Node {
  node: {
    title: string;
    excerpt: string;
    content: string;
    slug: string;
    date: Date;
    featuredImage: {
      node: {
        sourceUrl: string;
      }
    };
    author: {
      node: {
        name: string;
        firstName: string;
        lastName: string;
        avatar: {
          url: string;
        }
      }
    };
    categories: {
      edges: Array<{
        node: {
          name: string;
        }
      }>
    }
  };
}
