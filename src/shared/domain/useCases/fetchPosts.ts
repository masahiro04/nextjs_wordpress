import { Category, ICategoryRepository, IPostRepository, Post } from '@/domain';
import { PostRepository } from '@/infrastructure';
import { CategoryRepository } from '@/infrastructure/categoryRepository';

export class FetchPostsUseCase {
  private readonly postRepository: IPostRepository;
  private readonly categoryRepository: ICategoryRepository;

  constructor() {
    this.postRepository = new PostRepository();
    this.categoryRepository = new CategoryRepository();
  }

  public async execute(perPage: number, offset: number): Promise<Post[]> {
    console.log({ perPage, offset });
    const posts = await this.postRepository.getPosts(perPage, offset);
    const categoriesResponse = await this.categoryRepository.getCategories();
    // https://stackoverflow.com/questions/62628685/static-pagination-in-nextjs
    // https://developer.wordpress.org/rest-api/using-the-rest-api/pagination/
    // todo: https://mokubo.website//wp-json/wp/v2/posts?per_page=1&offset=0
    // todo: 取得する内容的にjson apiで良さそう
    return posts.map((post) => {
      const categories = post.categories
        .map((categoryId) => categoriesResponse.find((category) => category.id === categoryId))
        .filter((category): category is Category => !!category);
      return {
        ...post,
        categories
      };
    });
  }
}
