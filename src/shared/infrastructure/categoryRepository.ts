import { CategoryResponse, ICategoryRepository } from '..';
import { Api } from './api';

export class CategoryRepository implements ICategoryRepository {
  public async getCategories(): Promise<CategoryResponse[]> {
    const response = await Api.get<CategoryResponse[]>('https://mokubo.website//wp-json/wp/v2/categories?per_page=100');
    return response;
  }
}
