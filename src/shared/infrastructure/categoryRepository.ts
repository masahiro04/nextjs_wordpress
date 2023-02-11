import { CategoryResponse, ICategoryRepository } from '..';
import { Api } from './api';

export class CategoryRepository implements ICategoryRepository {
  public async getCategories(): Promise<CategoryResponse[]> {
    const url = process.env.WORDPRESS_API_URL;
    if (!url) {
      throw new Error('WORDPRESS_API_URL not set');
    }
    return await Api.get<CategoryResponse[]>(`${url}/categories?per_page=100`);
  }
}
