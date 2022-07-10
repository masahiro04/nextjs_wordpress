import React from 'react';
import { NextPage } from 'next';
import { Layout } from '../../components/layouts/layout';
import {AboutMeSection} from '../../components/common/aboutMeSection';


const Index: NextPage = () => {

  return (
    <Layout>
      <div className='px-6 mx-auto sm:px-10 sm:max-w-screen-md lg:max-w-screen-lg'>
        <div className=' max-w-7xl mx-auto px-4 sm:px-6 mb-0 text-indigo-700 font-medium'>
          <h1 className='font-bold my-4 text-gray-700 break-all text-4xl'>
            Contact
          </h1>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfXjYNmZf_Db_KqWrM3YPqkBORiVX_FY_mSv7jXhJ6FRz3iJA/viewform?embedded=true" width="640" height="788" frameBorder="0" marginHeight={ 0 } marginWidth={ 0 }>読み込んでいます…</iframe>
          <AboutMeSection />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
