import { Author } from './author';
import { Category } from './category';
import { FeaturedImage } from './featuredImage';

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImageUrl: FeaturedImage;
  author: Author;
  categories: Category[];
}
