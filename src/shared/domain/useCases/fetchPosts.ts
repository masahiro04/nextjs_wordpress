import { Category, ICategoryRepository, IPostRepository, Post } from '@/domain';
import { CategoryRepository, PostRepository } from '@/infrastructure';

export class FetchPostsUseCase {
  private readonly postRepository: IPostRepository;
  private readonly categoryRepository: ICategoryRepository;

  constructor() {
    this.postRepository = new PostRepository();
    this.categoryRepository = new CategoryRepository();
  }

  public async execute(perPage: number, offset: number): Promise<Post[]> {
    const posts = await this.postRepository.getPosts(perPage, offset);
    const categoriesResponse = await this.categoryRepository.getCategories();
    return posts.map((post) => {
      const categories = post.categories
        .map((categoryId) => categoriesResponse.find((category) => category.id === categoryId))
        .filter((category): category is Category => !!category);
      return { ...post, categories };
    });
  }
}
