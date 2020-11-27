import Head from 'next/head';
import { Container } from 'components';

import ValidateOTPPage from 'views/ValidateOTPPage';

const JoinPage = (): JSX.Element => {
    return (
        <div className="w-full h-full bg-background">
            <Head>
                <title>Welcome To TinkerHub</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <ValidateOTPPage />
            </Container>
        </div>
    );
};

export default JoinPage;
