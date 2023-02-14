import { CategoryResponse } from '@/infrastructure';

export interface ICategoryRepository {
  getCategories: () => Promise<Awaited<CategoryResponse[]>>;
}
