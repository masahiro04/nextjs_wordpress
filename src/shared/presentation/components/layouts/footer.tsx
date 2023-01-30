import React from 'react';

type FooterItem = {
  filename: 'github' | 'twitter' | 'menta' | 'mail';
  url: string;
};

type FooterItemProps = {
  item: FooterItem;
};

const FooterItem: React.FC<FooterItemProps> = ({ item }) => {
  return (
    <div className='relative'>
      <img className='w-6 h-6' src={`/static/images/${item.filename}.svg`} alt={`${item.filename}`} />
      <a className='absolute inset-0' href={item.url} target='_blank' rel='noreferrer'></a>
    </div>
  );
};

export const Footer: React.FC = () => {
  const items: FooterItem[] = [
    { filename: 'github', url: 'https://github.com/masahiro04' },
    { filename: 'twitter', url: 'https://twitter.com/masa_okubo' },
    { filename: 'menta', url: 'https://menta.work/user/20351' },
    {
      filename: 'mail',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSfXjYNmZf_Db_KqWrM3YPqkBORiVX_FY_mSv7jXhJ6FRz3iJA/viewform?embedded=true'
    }
  ];
  return (
    <footer className='justify-between text-center sm:flex'>
      <div className='flex items-center space-x-3 justify-center mb-5 sm:order-last sm:mb-0'>
        {items.map((item, key) => (
          <FooterItem key={key} item={item} />
        ))}
      </div>
      <div className='text-gray-700 sm:order-first'>copyright &copy; 2016-2023 Masahiro Okubo</div>
    </footer>
  );
};
