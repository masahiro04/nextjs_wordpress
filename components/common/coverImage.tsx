import Image from 'next/image';
import React from 'react';

type Props = {
  title: string;
  url: string;
};

export const CoverImage: React.FC<Props> = (props) => {
  const { title, url } = props;
  return (
    <div className='my-2'>
      <Image src={url} alt={title} className='w-full' objectFit='contain' width={900} height={500} />
    </div>
  );
};
