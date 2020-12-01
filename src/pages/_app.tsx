import { AuthProvider } from 'context/AuthContext';
import { CheckSession } from 'HOC/CheckSession';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Router from 'next/router';
import { useState } from 'react';
import NProgress from 'nprogress';
import '../styles/globals.css';
import '../styles/tailwind.base.css';
import 'nprogress/nprogress.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    const [pageChange, setPagePage] = useState(false);

    //Binding events.
    Router.events.on('routeChangeStart', () => {
        NProgress.start();
        setPagePage(true);
    });
    Router.events.on('routeChangeComplete', () => {
        NProgress.done();
        setPagePage(false);
    });
    Router.events.on('routeChangeError', () => {
        NProgress.done();
        setPagePage(false);
    });

    return (
        <AuthProvider>
            <CheckSession pageChange={pageChange}>
                <Component {...pageProps} />;
            </CheckSession>
        </AuthProvider>
    );
};

export default MyApp;
