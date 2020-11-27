import Head from 'next/head';
import { Container } from 'components';

import JoinPageView from 'views/JoinPage';

const JoinPage = (): JSX.Element => {
    return (
        <div className="w-full h-full bg-background">
            <Head>
                <title>Welcome To TinkerHub</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <JoinPageView />
            </Container>
        </div>
    );
};

export default JoinPage;
