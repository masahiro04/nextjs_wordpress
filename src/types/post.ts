export interface Post {
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  date: string;
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
}

export interface Category {
  node: {
    name: string;
  };
}

export interface Page {
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  date: string;
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
    edges: Array<Category>;
  };
}

export interface Node {
  node: Post;
}

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

export interface PostResponse {
  post: Post;
}
export interface PageResponse {
  pageBy: Page;
}
