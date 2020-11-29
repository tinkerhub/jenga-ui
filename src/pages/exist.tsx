import Head from 'next/head';
import { Container } from 'components';

import ThankYouAndExistPage from 'views/ThankYouAndExistPage';

const Title = (
    <h1>
        You are already a member of TinkerHub{' '}
        <span role="img" aria-label="pop-emoji">
            🎊
        </span>
    </h1>
);

const subBody = (
    <>
        <h5>If you need any kind of assistance, please mail us at hello@tinkerhub.org</h5>
    </>
);

const UserExistPage = (): JSX.Element => {
    return (
        <div className="w-full h-full bg-background">
            <Head>
                <title>Welcome To TinkerHub</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <ThankYouAndExistPage header={Title} subBody={subBody} memberShipID="652145" />
            </Container>
        </div>
    );
};

export default UserExistPage;
