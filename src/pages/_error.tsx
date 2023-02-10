import { BackButton, Layout } from '@/presentation';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Custom404: NextPage = () => {
  const router = useRouter();
  return (
    <Layout title='Not found' description='ページが見つかりません'>
      <BackButton onClick={() => router.back()} />
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
