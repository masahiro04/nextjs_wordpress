import { format, parseISO } from 'date-fns';

type Props = {
  dateString: string;
};

export const Date: React.FC<Props> = ({ dateString }: Props) => {
  return (
    <time dateTime={dateString} className='text-gray-500'>
      {format(parseISO(dateString), 'yyyy/MM/dd')}
    </time>
  );
};
