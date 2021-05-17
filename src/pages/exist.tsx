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
    <p className="text-subtext mb-5">
        If you need any kind of assistance, <br /> please mail us at{' '}
        <a href="mailto:hello@tinkerhub.org">hello@tinkerhub.org</a>
    </p>
);

const UserExistPage = (): JSX.Element => {
    return (
        <div className="w-full h-full bg-background overflow-y-auto">
            <Head>
                <title>Welcome To TinkerHub</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <ThankYouAndExistPage header={Title} subBody={subBody} />
            </Container>
        </div>
    );
};

export default UserExistPage;
