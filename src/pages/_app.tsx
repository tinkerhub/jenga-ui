import { AuthProvider } from 'context/AuthContext';
import { CheckSession } from 'HOC/CheckSession';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';
import '../styles/tailwind.base.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <AuthProvider>
            <CheckSession>
                <Component {...pageProps} />;
            </CheckSession>
        </AuthProvider>
    );
};

export default MyApp;
