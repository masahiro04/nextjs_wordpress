import React, { useEffect } from 'react';

export const AboutMeSection: React.FC = () => {
  useEffect(() => {
    const tweet = document.createElement('script');
    tweet.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweet.setAttribute('defer', 'true');
    document.head.appendChild(tweet);
  }, []);

  return (
    <>
      <div className='mt-5'>
        <div className='flex justify-center space-x-12'>
          <a href='https://github.com/masahiro04' target='_blank' rel='noreferrer'>
            <img src={`${process.env.HOST_URL}/static/images/github.svg`} className='' width={50} alt='' />
          </a>
          <a href='https://menta.work/user/20351' target='_blank' rel='noreferrer'>
            <img src={`${process.env.HOST_URL}/static/images/menta.svg`} className='' width={50} alt='' />
          </a>
          <a href='https://twitter.com/masa_okubo' target='_blank' rel='noreferrer'>
            <img src={`${process.env.HOST_URL}/static/images/twitter.svg`} className='' width={50} alt='' />
          </a>
        </div>
        <a href='https://twitter.com/masa_okubo' className='text-white' target='_blank' rel='noreferrer'>
          <i className='fab fa-twitter z-100 fill-white-500 text-white fa-lg mx-2' />
        </a>
      </div>
    </>
  );
};
