import { SearchWordContextProvider } from '@/providers';
import { AppProps } from 'next/app';
import 'prismjs/themes/prism-tomorrow.css';
import '../shared/presentation/styles/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <SearchWordContextProvider>
    <Component {...pageProps} />
  </SearchWordContextProvider>
);

export default MyApp;
