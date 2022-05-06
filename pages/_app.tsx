import { AppProps } from 'next/app';
import 'prismjs/themes/prism-tomorrow.css';
import React from 'react';
import '../styles/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => <Component {...pageProps} />;

export default MyApp;
