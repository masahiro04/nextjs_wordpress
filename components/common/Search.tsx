import { useRouter } from 'next/router';
import React from 'react';

export const Search: React.FC = () => {
  const router = useRouter();
  const word = router.query.word ? router.query.word.toString() : '';
  const handleSearch = async (newWord: string) => {
    await router.replace(`/?word=${newWord}`, undefined, { shallow: true });
  };

  return (
    <div className='relative text-sky-100 focus-within:text-gray-400 border rounded-lg'>
      <div className='flex items-center justify-center'>
        <div className='flex border-2 rounded'>
          <input
            type='text'
            className='px-4 py-2'
            placeholder='Search...'
            onChange={(e) => handleSearch(e.target.value)}
            value={word === '' ? undefined : word}
          />
        </div>
      </div>
    </div>
  );
};
