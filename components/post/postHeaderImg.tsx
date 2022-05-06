import React from 'react';
import { CoverImage } from '../common/cover-image';

type Props = {
  title: string;
  coverImage: string;
};

export const PostHeaderImg: React.FC<Props> = (props) => {
  const { title, coverImage = `${process.env.HOST_URL}/static/images/not_found.png` } = props;

  return <CoverImage title={title} url={coverImage} />;
};
