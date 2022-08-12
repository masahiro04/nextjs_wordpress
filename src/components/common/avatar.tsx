import React from 'react';

type Props = {
  name: string;
};

export const Avatar: React.FC<Props> = (props) => {
  const { name } = props;
  return <div className='text-gray-500'>{name}</div>;
};
