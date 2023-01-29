import { Layout } from '@/presentation';
import { useRouter } from 'next/router';
import React from 'react';

const Custom404: React.FC = () => {
  const router = useRouter();
  return (
    <Layout title='Not found' description='ページが見つかりません'>
      <div
        onClick={() => router.back()}
        className='relative cursor-pointer duration-500 py-2 bg-white rounded-md shadow-sm px-2 bg-opacity-60 flex items-center w-24 justify-center text-gray-600 text-sm -translate-y-1 hover:shadow-md sm:-translate-y-2'
      >
        <span className='mr-1'>Back</span>
        <svg
          className='w-4 h-4 sm:h-5 sm:w-5'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'></path>
        </svg>
      </div>

      <div className='relative overflow-hidden py-8 bg-white bg-opacity-50 rounded-md shadow-md sm:py-16'>
        <div className='relative px-4 sm:px-6.lg:px-8'>
          <div className='mx-auto max-w-prose text-lg'>
            <h1>
              <span className='mt-2 block text-center text-2xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl'>
                Page not found.
              </span>
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;
