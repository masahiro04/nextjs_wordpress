import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { PER_PAGE } from '../../lib/constants';

type Props = {
  count: number;
};

export const Pagination: React.FC<Props> = (props) => {
  const { count } = props;
  const router = useRouter();
  const pages = count < PER_PAGE ? 1 : Math.floor(count / PER_PAGE);
  const currentPage = router.query?.page === undefined ? 1 : Number(router.query?.page);

  const categoryRoutename = (): string => {
    if (router.query.categoryName === '' || router.query.categoryName === undefined) {
      return '';
    } else {
      return `&categoryName=${router.query.categoryName.toString()}`;
    }
  };

  return (
    <nav
      className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'
      aria-label='Pagination'
    >
      <div className='hidden sm:block'>
        <p className='text-sm text-gray-700'>
          <span className='font-medium'>Pages: </span>
          <span className='font-medium'>{currentPage}</span> {' / '}
          <span className='font-medium'>{pages}</span>
        </p>
      </div>
      <div className='flex-1 flex justify-between sm:justify-end'>
        {currentPage !== 1 && (
          <Link href={`?page=${currentPage - 1}${categoryRoutename()}`}>
            <a
              href='#'
              className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
            >
              Previous
            </a>
          </Link>
        )}
        {pages !== currentPage && (
          <Link href={`?page=${currentPage + 1}${categoryRoutename()}`}>
            <a
              href='#'
              className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
            >
              Next
            </a>
          </Link>
        )}
      </div>
    </nav>
  );
};
