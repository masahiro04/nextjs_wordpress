import React from 'react';
import { AppProps } from 'next/app';

import '../styles/tailwind.css';
import 'prismjs/themes/prism-tomorrow.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
);

export default MyApp;
