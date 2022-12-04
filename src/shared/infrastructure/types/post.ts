import { Author } from './author';
import { Category } from './category';
import { FeaturedImage } from './featuredImage';
import { Node } from './node';

export interface TPost {
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  date: string;
  featuredImage: Node<FeaturedImage>;
  author: Node<Author>;
  categories: {
    edges: Array<Node<Category>>;
  };
}
