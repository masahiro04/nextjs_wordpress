import React from 'react';
import { Avatar } from '../common/avatar';
import { Date } from '../common/date';

type Props = {
  title: string;
  date: string;
  authorName: string;
};

export const PostHeader: React.FC<Props> = (props): JSX.Element => {
  const { title, date, authorName } = props;
  return (
    <>
      <div className='flex flex-column my-auto'>
        <div>
          <Avatar name={authorName} />
        </div>
        <div>
          <small className='ml-2'>
            <Date dateString={date} />
          </small>
        </div>
      </div>
      <h1 className='font-bold my-4 text-gray-700 break-all text-4xl'>{title}</h1>
    </>
  );
};
