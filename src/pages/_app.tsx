import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';
import '../styles/tailwind.base.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return <Component {...pageProps} />;
};

export default MyApp;
