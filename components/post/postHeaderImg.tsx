import React from 'react';
import { CoverImage } from '../common/cover-image';

type Props = {
  title: string;
  coverImage: string;
  slug: string;
};

export const PostHeaderImg: React.FC<Props> = (props) => {
  const { title, coverImage = `${process.env.HOST_URL}/static/images/not_found.png`, slug } = props;

  return <CoverImage title={title} url={coverImage} slug={slug} />;
};
