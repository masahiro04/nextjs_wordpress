import { IPostRepository } from '@/domain';
import { isDevelopment } from '@/extension';
import { PostRepository, PostResponse } from '@/infrastructure';

export class FetchPostSlugsUseCase {
  private readonly postRepository: IPostRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  private async makePosts(posts: PostResponse[]): Promise<PostResponse[]> {
    const response = await this.postRepository.getPosts(100, posts.length);
    if (response.length === 100 || isDevelopment()) {
      return [...posts, ...response];
    }
    return this.makePosts([...posts, ...response]);
  }

  public async execute(): Promise<string[]> {
    const posts = await this.makePosts([]);
    // console.log({ posts });
    return posts.map((post) => post.slug);
  }
}

// private async makePosts(
//   posts: Node<TPost>[],
//   _offset: string
// ): Promise<{ nodes: Array<Node<TPost>>; hasNextPage: boolean; offset: string }> {
//   const res: PostsResponse = await this.postRepository.getAllPosts(100, _offset);
//   if (!res.data.posts.pageInfo.hasNextPage || isDevelopment()) {
//     return {
//       nodes: [...posts, ...res.data.posts.edges],
//       hasNextPage: res.data.posts.pageInfo.hasNextPage,
//       offset: res.data.posts.pageInfo.endCursor
//     };
//   }
//   return this.makePosts([...posts, ...res.data.posts.edges], res.data.posts.pageInfo.endCursor);
// }
//
// public async execute(): Promise<Post[]> {
//   const response = await this.makePosts([], '');
// public async execute(perPage: number, offset: number): Promise<Post[]> {
//   const posts = await this.postRepository.getPosts(perPage, offset);
//   const categoriesResponse = await this.categoryRepository.getCategories();
//   // https://stackoverflow.com/questions/62628685/static-pagination-in-nextjs
//   // https://developer.wordpress.org/rest-api/using-the-rest-api/pagination/
//   // todo: https://mokubo.website//wp-json/wp/v2/posts?per_page=1&offset=0
//   // todo: 取得する内容的にjson apiで良さそう
//   const nodes = response.nodes;
//   return nodes.map(({ node }) => {
//     const post = node;
//     const author: Author = { name: post.author.node.name };
//     const categories: Category[] = post.categories.edges.map((category) => ({ name: category.node.name }));
//   return posts.map((post) => {
//     const categories = post.categories
//       .map((categoryId) => categoriesResponse.find((category) => category.id === categoryId))
//       .filter((category): category is Category => !!category);
//     return {
//       slug: post.slug,
//       title: post.title,
//       excerpt: post.excerpt,
//       content: post.content,
//       date: post.date,
//       featuredImageUrl: {
//         url: post.featuredImage.node.sourceUrl ?? '/static/images/not_found.png',
//         alt: post.featuredImage.node.altText ?? ''
//       },
//       author,
//       ...post,
//        categories
//      };
//    });
//
