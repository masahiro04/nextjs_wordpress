import React from "react";
import { Avatar } from "../common/avatar";
import { Date } from "../common/date";

export const PostHeader = ({ title, date, author }): JSX.Element => (
  <>
    <div className="flex flex-column my-auto">
      <div>{author && <Avatar name={author.name} />}</div>
      <div>
        <small className="ml-2">
          <Date dateString={date} />
        </small>
      </div>
    </div>
    <h1>{title}</h1>
  </>
);

