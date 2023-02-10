import { Author } from './author';
import { Category } from './category';
import { FeaturedImage } from './featuredImage';

interface Rendered {
  rendered: string;
}

export interface Post {
  id: number;
  date: string;
  slug: string;
  title: Rendered;
  excerpt: Rendered;
  content: Rendered;
  featuredImageUrl: FeaturedImage;
  author: Author;
  categories: Category[];
}
