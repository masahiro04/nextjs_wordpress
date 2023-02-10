import { Category, ICategoryRepository, IPostRepository, Post } from '@/domain';
import { CategoryRepository, PostRepository } from '@/infrastructure';

export class FetchPostUseCase {
  private readonly postRepository: IPostRepository;
  private readonly categoryRepository: ICategoryRepository;

  constructor() {
    this.postRepository = new PostRepository();
    this.categoryRepository = new CategoryRepository();
  }

  public async execute(slug: string): Promise<Post> {
    const post = await this.postRepository.getPost(slug);
    const categoriesResponse = await this.categoryRepository.getCategories();
    const categories = post.categories
      .map((categoryId) => categoriesResponse.find((category) => category.id === categoryId))
      .filter((category): category is Category => !!category);
    return { ...post, categories };
  }
}
