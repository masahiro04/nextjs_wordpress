import React from 'react';
import { CoverImage } from '../common/coverImage';

type Props = {
  title: string;
  coverImage: string;
};

export const PostHeaderImg: React.FC<Props> = (props) => {
  const { title, coverImage = '/static/images/not_found.png' } = props;

  return <CoverImage title={title} url={coverImage} />;
};
