import Prism from 'prismjs';
import { useEffect } from 'react';

type Props = {
  content: string;
};

export const PostBody: React.FC<Props> = ({ content }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className='mx-auto break-words'>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};
