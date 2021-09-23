import { parseISO, format } from 'date-fns';

const Date = ({ dateString }): JSX.Element =>
  <time dateTime={dateString} className="text-gray-500">{format(parseISO(dateString), 'yyyy年MM月dd日')}</time>;

export default Date;
