import { Category } from './category';

interface Rendered {
  rendered: string;
}

export interface Post {
  id: number;
  title: Rendered;
  slug: string;
  excerpt: Rendered;
  content: Rendered;
  categories: Category[];
  date: string;
}
