import { format, parseISO } from 'date-fns';
import React from 'react';

type Props = {
  dateString: string;
};
export const Date: React.FC<Props> = (props) => {
  const { dateString } = props;
  if (dateString === undefined) return;
  return (
    <time dateTime={dateString} className='text-gray-500'>
      {format(parseISO(dateString), 'yyyy年MM月dd日')}
    </time>
  );
};
