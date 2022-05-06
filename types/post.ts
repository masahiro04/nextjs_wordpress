export interface PostsResponse {
  posts: {
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: string;
      endCursor: string;
    };
    edges: Array<Node>;
  };
}
export interface Post {
  edges: Array<Node>;
}

// TODO(okubo): hasNextPageの対応まだなので、この辺り必須
export interface Node {
  node: {
    title: string;
    excerpt: string;
    content: string;
    slug: string;
    date: Date;
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    };
    author: {
      node: {
        name: string;
        firstName: string;
        lastName: string;
        avatar: {
          url: string;
        };
      };
    };
    categories: {
      edges: Array<{
        node: {
          name: string;
        };
      }>;
    };
  };
}
