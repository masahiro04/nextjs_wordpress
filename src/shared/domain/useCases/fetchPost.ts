import { Author, Category, IPostRepository, Post } from '@/domain';
import { PostRepository } from '@/infrastructure/post';

// export const fetchPost = async (slug: string): Promise<PostResponse> => {
//   const response = await getPost(slug);
//   return response;
// };

export class FetchPostUseCase {
  private readonly postRepository: IPostRepository;

  constructor() {
    this.postRepository = new PostRepository();
  }

  public async execute(slug: string): Promise<Post> {
    const response = await this.postRepository.getPost(slug);
    const { post } = response.data;
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
  }
}

