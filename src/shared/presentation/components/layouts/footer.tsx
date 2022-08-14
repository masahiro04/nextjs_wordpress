import React from 'react';

export const Footer: React.FC = () => (
  <div className='bg-indigo-800 text-white text-center leading-8 w-full py-3'>
    <div className='flex flex-col bg-indigo-800 font-bold'>
      <div>copyright© 2016-{new Date().getFullYear()} Masahiro Okubo</div>
      <div className='justify-centertext-center'>
        <a href='https://github.com/masahiro04/nextjs_wordpress' target='_blank' rel='noreferrer'>
          <div className='flex justify-center'>
            <div>source code</div>
            <div className='my-auto'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 ml-2'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
);
