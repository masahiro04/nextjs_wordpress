import { AboutMeSection, Layout } from '@/presentation';
import { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <Layout>
      <div className='px-6 mx-auto sm:px-10 sm:max-w-screen-md lg:max-w-screen-lg'>
        <div className=' max-w-7xl mx-auto px-4 sm:px-6 mb-0 text-indigo-700 font-medium'>
          <h1 className='font-bold my-4 text-gray-700 break-all text-4xl'>Masahiro Okubo</h1>
          <div className=' my-4 text-gray-500 break-all'>
            I&apos;m a software engineer living in Japan, Nagoya. Currently building a car mechanic version of Uber.
            Previously, I worked on a XR startup and built multiple applications.
          </div>
          <h2 className='font-bold my-4 text-gray-700 break-all text-4xl'>Languages</h2>
          <div className='my-4 text-gray-500 break-all'>Go / TypeScript / Dart / Ruby</div>
          <h2 className='font-bold my-4 text-gray-700 break-all text-4xl'>Interests</h2>
          <div className=' my-4 text-gray-500 break-all'>Dart / Swift / Nim / Rust / WebAssembly</div>
          <AboutMeSection />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
