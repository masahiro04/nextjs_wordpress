import Link from 'next/link';

type Props = {
  totalPage: number;
  currentPage: number;
};

export const Pagination: React.FC<Props> = ({ totalPage, currentPage }: Props) => {
  return (
    <div className='flex items-center justify-center space-x-4 mt-8'>
      {currentPage !== 1 && (
        <Link href={`/pages/${currentPage - 1}`}>
          <div className='relative cursor-pointer duration-500 py-2 bg-white rounded-md shadow-sm px-2 bg-opacity-60 flex items-center w-24 justify-center text-gray-600 text-sm sm:text-base sm:px-4 sm:w-32 hover:shadow-md'>
            <svg className='w-5 h-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z'
                clipPath='evenodd'
              ></path>
            </svg>
            <span className='ml-1 flex'>
              <span className='hidden sm:block'>Page {currentPage - 1}</span>
              <span className='whitespace-nowrap sm:hidden'>P. {currentPage - 1}</span>
            </span>
          </div>
        </Link>
      )}

      {totalPage !== currentPage && (
        <Link href={`/pages/${currentPage + 1}`}>
          <div className='relative cursor-pointer duration-500 py-2 bg-white rounded-md shadow-sm px-2 bg-opacity-60 flex items-center w-24 justify-center text-gray-600 text-sm sm:text-base sm:px-4 sm:w-32 hover:shadow-md'>
            <span className='mr-1'>Next</span>
            <svg className='w-5 h-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z'
                clipPath='evenodd'
              ></path>
            </svg>
          </div>
        </Link>
      )}
    </div>
  );
};
