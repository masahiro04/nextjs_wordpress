import { Node } from './node';
import { TPost } from './post';

export interface PostsResponse {
  data: {
    posts: {
      pageInfo: {
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor: string;
        endCursor: string;
      };
      edges: Array<Node<TPost>>;
    };
  };
}
