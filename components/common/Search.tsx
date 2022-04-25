import React from 'react';

type Props = {
  word: string;
  setWord: (word: string) => void;
  handleSearch: () => void;
};

export const Search: React.FC<Props> = (props) => {
  const { word = '', setWord, handleSearch } = props;
  return (
    <div className='relative text-sky-100 focus-within:text-gray-400 border rounded-lg'>
      <div className='flex items-center justify-center'>
        <div className='flex border-2 rounded'>
          <input
            type='text'
            className='px-4 py-2'
            placeholder='Search...'
            onChange={(e) => setWord(e.target.value)}
            value={word === '' ? undefined : word}
          />
          <button className='flex items-center justify-center px-4 border-l' onClick={handleSearch}>
            <svg
              className='w-6 h-6 text-gray-600'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
