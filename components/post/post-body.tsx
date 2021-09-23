import Prism from 'prismjs';
import { useEffect } from 'react';
// 公式が出していたコードから引き継いでる
import styles from '../../styles/post-body.module.css';

const PostBody = ({ content }): JSX.Element => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="mx-auto">
      <div
        className={ styles.content }
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default PostBody;
