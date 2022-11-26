import { Author, Category, IPostRepository, Post } from '@/domain';
import { PostRepository } from '@/infrastructure/post';

// export const fetchRelatedPosts = async (): Promise<PostsResponse> => {
//   const response = await getRelatedPosts(categoryName);
//   return response;
// };

export class FetchRelatedPostsUseCase {
  private readonly postRepository: IPostRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  public async execute(categoryName = ''): Promise<Post[]> {
    const response = await this.postRepository.getRelatedPosts(categoryName);
    const { posts } = response.data;
    return posts.edges.map(({ node }) => {
      const post = node;
      const author = new Author(post.author.node.name);
      const categories: Category[] = post.categories.edges.map((category) => new Category(category.node.name));
      return new Post(
        post.slug,
        post.title,
        post.excerpt,
        post.content,
        post.date,
        post.featuredImage.node.sourceUrl,
        author,
        categories
      );
    });
  }
}
