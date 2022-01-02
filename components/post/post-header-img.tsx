import React from "react";
import { CoverImage } from "../common/cover-image";

export const PostHeaderImg = ({
  title,
  coverImage = `${process.env.HOST_URL}/static/images/not_found.png`,
  slug,
}): JSX.Element => <CoverImage title={title} url={coverImage} slug={slug} />;
