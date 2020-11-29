import Head from 'next/head';
import { Container } from 'components';

import DetailsPage from 'views/DetailsPage';

const JoinPage = (): JSX.Element => {
    return (
        <div className="w-full h-full bg-background overflow-x-hidden">
            <Head>
                <title>Welcome To TinkerHub</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <DetailsPage />
            </Container>
        </div>
    );
};

export default JoinPage;
