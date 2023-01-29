import Prism from 'prismjs';
import React, { useEffect } from 'react';

type Props = {
  content: string;
};

export const PostBody: React.FC<Props> = ({ content }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className='mx-auto break-words'>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};
