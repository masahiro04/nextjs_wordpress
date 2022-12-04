import { Author, Category, IPostRepository, Post } from '@/domain';
import { isDevelopment } from '@/extension';
import { Node, PostRepository, PostsResponse, TPost } from '@/infrastructure';

export class FetchPostsUseCase {
  private readonly postRepository: IPostRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  private async makePosts(
    posts: Node<TPost>[],
    _offset: string
  ): Promise<{ nodes: Array<Node<TPost>>; hasNextPage: boolean; offset: string }> {
    const res: PostsResponse = await this.postRepository.getAllPosts(100, _offset);
    if (!res.data.posts.pageInfo.hasNextPage || isDevelopment()) {
      return {
        nodes: [...posts, ...res.data.posts.edges],
        hasNextPage: res.data.posts.pageInfo.hasNextPage,
        offset: res.data.posts.pageInfo.endCursor
      };
    }
    return this.makePosts([...posts, ...res.data.posts.edges], res.data.posts.pageInfo.endCursor);
  }

  public async execute(): Promise<Post[]> {
    const response = await this.makePosts([], '');
    const nodes = response.nodes;
    return nodes.map(({ node }) => {
      const post = node;
      const author: Author = { name: post.author.node.name };
      const categories: Category[] = post.categories.edges.map((category) => ({ name: category.node.name }));
      return {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        date: post.date,
        featuredImageUrl: {
          url: post.featuredImage.node.sourceUrl ?? '/static/images/not_found.png',
          alt: post.featuredImage.node.altText ?? ''
        },
        author,
        categories
      };
    });
  }
}
