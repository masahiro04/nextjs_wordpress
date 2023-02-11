import { Category } from '@/domain';
import Link from 'next/link';

type CategoryItemProps = {
  name: string;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ name }: CategoryItemProps) => {
  return (
    <div className='align-middle relative group flex'>
      <div className='w-3 h-3 rotate-45 left-0 bg-main-300 rounded-sm mt-0.5' />
      <div className='bg-main-300 rounded-r-sm text-xs tracking-wide text-gray-500 -translate-x-1.5 pl-1.5 pr-1.5'>
        {name}
      </div>
      <div className='absolute rounded-full bg-white bg-opacity-80 w-1 h-1 top-1.5 left-1' />
    </div>
  );
};

type CategoriesProps = {
  categories: Category[];
  isLink: boolean;
};

export const Categories: React.FC<CategoriesProps> = ({ categories, isLink = true }: CategoriesProps) => {
  if (categories.length === 0) return <></>;

  return (
    <div className='flex space-x-2 items-center pl-1'>
      {categories.map((category, key) =>
        isLink ? (
          <Link key={key} href={`/posts?categoryName=${category.name}`}>
            <CategoryItem name={category.name} />
          </Link>
        ) : (
          <CategoryItem key={key} name={category.name} />
        )
      )}
    </div>
  );
};
