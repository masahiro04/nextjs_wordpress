import Prism from 'prismjs';
import React, { useEffect } from 'react';
// 公式が出していたコードから引き継いでる
import styles from '../../styles/post-body.module.css';

type Props = {
  content: string;
};

export const PostBody: React.FC<Props> = (props) => {
  const { content } = props;
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className='mx-auto break-words'>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};
