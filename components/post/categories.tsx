import Link from 'next/link';
import React from 'react';
import { Category } from '../../types/post';

type Props = {
  categories: Array<Category>;
};

export const Categories: React.FC<Props> = (props) => {
  const { categories } = props;

  if (categories.length === 0) return;

  return (
    <span className='ml-1'>
      {categories.map((category: Category) => (
        <Link key={category.node.name} href={`/posts/?categoryName=${category.node.name}`}>
          <a href='#'>
            <button
              type='button'
              className='ml-1 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium
                          rounded shadow-sm text-white bg-indigo-700 hover:bg-indigo-700 focus:outline-none focus:ring-2
                          focus:ring-offset-2 focus:bg-indigo-700'
            >
              {category.node.name}
            </button>
          </a>
        </Link>
      ))}
    </span>
  );
};
