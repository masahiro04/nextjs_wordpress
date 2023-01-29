import { Category } from '@/domain';
import Link from 'next/link';
import React from 'react';

type Props = {
  categories: Category[];
  isLink: boolean;
};

const CategoryItem: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className='relative group flex'>
      <div className='w-3 h-3 rotate-45 left-0 bg-main-300 rounded-sm mt-0.5' />
      <div className='bg-main-300 rounded-r-sm text-xs tracking-wide text-gray-500 -translate-x-1.5 pl-1.5 pr-1.5'>
        {name}
      </div>
      <div className='absolute rounded-full bg-white bg-opacity-80 w-1 h-1 top-1.5 left-1' />
    </div>
  );
};
export const Categories: React.FC<Props> = ({ categories, isLink = true }) => {
  if (categories.length === 0) return <></>;

  return (
    <div className='flex space-x-2 items-center overflow-x-auto pl-1'>
      {categories.map((category, key) =>
        isLink ? (
          <Link href={`/posts?categoryName=${category.name}`}>
            <CategoryItem key={key} name={category.name} />
          </Link>
        ) : (
          <CategoryItem key={key} name={category.name} />
        )
      )}
    </div>
  );
};
