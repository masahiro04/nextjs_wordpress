import { NextPage } from 'next';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout: NextPage<Props> = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Layout;
