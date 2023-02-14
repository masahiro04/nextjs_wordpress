import { Category, ICategoryRepository } from '@/domain';
import { CategoryRepository } from '@/infrastructure';

export class FetchCategoriesUseCase {
  private readonly categoryRepository: ICategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  public async execute(): Promise<Category[]> {
    return await this.categoryRepository.getCategories();
  }
}
