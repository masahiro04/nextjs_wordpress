import { Node } from '../types/post';

export const reistrictCharacters = (chars: string, limit: number): string => chars.slice(0, limit);

export const isDevelopment = (): boolean => process.env.NODE_ENV === 'development';

// TODO(okubo): ロジックなので責務分けたい
export const filterByCategory = (posts: Array<Node>, categoryName: string): Array<Node> =>
  posts.filter(
    (post) => (post.node.categories?.edges?.filter((category) => category.node.name === categoryName)).length !== 0
  );

// TODO(okubo): ロジックなので責務分けたい
export const filterByWord = (posts: Array<Node>, word: string): Array<Node> => {
  const reg = new RegExp(word);
  return posts.filter(
    (post) => reg.test(post.node['title']) || reg.test(post.node['excerpt']) || reg.test(post.node['content'])
  );
};
