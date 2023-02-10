import { useSearchWord } from '@/providers';
import { useRouter } from 'next/router';

export const SearchInput: React.FC = () => {
  const router = useRouter();
  const { word, setWord } = useSearchWord();
  const handleSearch = async (newWord: string) => {
    setWord(newWord);
    await router.replace(`/posts`, undefined, { shallow: true });
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
            value={word}
          />
        </div>
      </div>
    </div>
  );
};
