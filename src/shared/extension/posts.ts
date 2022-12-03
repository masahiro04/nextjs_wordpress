import { Post } from '@/domain';

// TODO(okubo): ロジックなので責務分けたい
export const filterByCategory = (posts: Post[], categoryName: string): Post[] =>
  posts.filter((post) => post.categories.filter((category) => category.name === categoryName).length !== 0);

// TODO(okubo): ロジックなので責務分けたい
export const filterByWord = (posts: Post[], word: string): Post[] => {
  const reg = new RegExp(word);
  return posts.filter((post) => reg.test(post.title) || reg.test(post.excerpt) || reg.test(post.content));
};
