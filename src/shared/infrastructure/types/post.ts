export interface PostDto {
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

export interface CategoryDto {
  node: {
    name: string;
  };
}

export interface PageDto {
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
    edges: Array<CategoryDto>;
  };
}

export interface Node {
  node: PostDto;
}

export interface PostsResponse {
  data: {
    posts: {
      pageInfo: {
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor: string;
        endCursor: string;
      };
      edges: Array<Node>;
    };
  };
}

export interface PostResponse {
  data: {
    post: PostDto;
  };
}

export interface PageResponse {
  pageBy: PageDto;
}
