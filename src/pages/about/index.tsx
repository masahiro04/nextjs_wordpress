import { Layout } from '@/presentation';
import { NextPage } from 'next';
import Image from 'next/image';

const About: NextPage = () => {
  return (
    <Layout>
      <div className='flex justify-center mx-auto mt-10 sm:w-2/3 sm:mt-0'>
        <div className='flex flex-col w-full'>
          <Image
            className='object-cover rounded-full mx-auto w-24 h-24'
            src='/static/images/kyuri.png'
            alt=''
            width='100'
            height='100'
          />
          <div className='mt-3 space-y-2'>
            <h3 className='text-xl font-semibold text-center text-gray-800'>Masahiro Okubo</h3>
            <p className='mx-auto text-center text-gray-800'>
              I&apos;m a software engineer living in Japan, Nagoya. Currently building a car mechanic version of Uber.
              Previously, I worked on a XR startup and built multiple applications.
            </p>
          </div>
          <div className='mt-8 space-y-7 sm:mt-5 sm:space-y-3'>
            <div>
              <div className='relative'>
                <div className='flex justify-center py-3 bg-white rounded-md max-w-full px-6 bg-opacity-60 text-gray-400 shadow-sm space-x-1 text-sm sm:text-base sm:space-x-2'>
                  <div className='text-gray-800 text-center'>Typescript</div>
                  <div className='text-gray-600 text-center'>/</div>
                  <div className='text-gray-800 text-center'>Dart</div>
                  <div className='text-gray-600 text-center'>/</div>
                  <div className='text-gray-800 text-center'>Go</div>
                </div>
                <div className='absolute inset-0 text-sm text-gray-500 -translate-y-6 sm:translate-y-0 sm:left-2 md:left-3 sm:top-0 md:top-1'>
                  Languages :
                </div>
              </div>
            </div>
            <div>
              <div className='relative'>
                <div className='flex justify-center space-x-2 py-3 bg-white rounded-md max-w-full px-6 bg-opacity-60 text-gray-400 shadow-sm text-sm'>
                  <div className='text-gray-800 text-center'>Edge computing, GCP, Rust, Web Assembly</div>
                </div>
                <div className='absolute inset-0 text-sm text-gray-500 -translate-y-6 sm:translate-y-0 sm:left-2 md:left-3 sm:top-0 md:top-1'>
                  Interests :
                </div>
              </div>
            </div>
            <div>
              <div className='relative group cursor-pointer'>
                <div className='flex justify-center space-x-2 py-3 bg-white rounded-md max-w-full px-6 bg-opacity-60 text-gray-400 shadow-sm duration-500 text-sm group-hover:shadow-md group-hover:scale-1 group-hover:bg-opacity-90'>
                  <div className='text-gray-800 text-center'>Contact me on Google Form</div>
                </div>
                <div className='absolute inset-0 text-sm text-gray-500 -translate-y-6 sm:translate-y-0 sm:left-2 md:left-3 sm:top-0 md:top-1'>
                  Contact :
                </div>
                <a
                  className='absolute inset-0'
                  href='https://docs.google.com/forms/d/e/1FAIpQLSfXjYNmZf_Db_KqWrM3YPqkBORiVX_FY_mSv7jXhJ6FRz3iJA/viewform?embedded=true'
                  target='_blank'
                  rel='noreferrer'
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
