import Head from 'next/head';
import { Container } from 'components';

import ThankYouAndExistPage from 'views/ThankYouAndExistPage';

const Title = <h1>Thanks for applying.</h1>;

const subBody = (
    <>
        <h5>
            We will review your application and share our community discord link in next 24 hours.
            We can&apos;t wait to onboard you!
        </h5>
        <p>
            Here is your membership id. We use this id for identity verification. If you need any
            kind of assistance, please mail us at hello@tinkerhub.org
        </p>
    </>
);

const DonePage = (): JSX.Element => {
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

export default DonePage;
