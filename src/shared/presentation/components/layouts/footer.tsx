import React from 'react';

export const Footer: React.FC = () => (
  <div className='bg-indigo-800 text-white text-center leading-8 w-full py-3'>
    <div className='flex flex-col bg-indigo-800 font-bold'>
      <div>copyright© 2016-{new Date().getFullYear()} Masahiro Okubo</div>
    </div>
  </div>
);
