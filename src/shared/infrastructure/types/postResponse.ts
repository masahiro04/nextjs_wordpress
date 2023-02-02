import { Post } from '@/domain';

export type PostResponse = Omit<Post, 'categories'> & { categories: number[] };
