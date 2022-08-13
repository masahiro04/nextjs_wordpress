import { getAllPosts, Node, PostsResponse } from '@/domain';
import { isDevelopment } from '@/extension';

export const fetchAllPosts = async (
  posts: Array<Node>,
  _offset: string
): Promise<{ nodes: Array<Node>; hasNextPage: boolean; offset: string }> => {
  const res: PostsResponse = await getAllPosts(100, _offset);
  if (!res.data.posts.pageInfo.hasNextPage || isDevelopment()) {
    return {
      nodes: [...posts, ...res.data.posts.edges],
      hasNextPage: res.data.posts.pageInfo.hasNextPage,
      offset: res.data.posts.pageInfo.endCursor
    };
  }
  return fetchAllPosts([...posts, ...res.data.posts.edges], res.data.posts.pageInfo.endCursor);
};
