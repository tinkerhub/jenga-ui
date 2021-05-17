import { useEffect, useRef } from 'react';
import Head from 'next/head';
import confetti from 'canvas-confetti';

import { Container } from 'components';
import ThankYouAndExistPage from 'views/ThankYouAndExistPage';
import { randomInRange } from 'utils/randomInRange';

const Title = <h1>Thanks for applying.</h1>;

const subBody = (
    <>
        <h5>
            We will review your application and share our community discord link in next 24 hours.
            We can&apos;t wait to onboard you!
        </h5>
        <p className="text-subtext mb-5">
            Here is your membership id. We use this id for identity verification. If you need any
            kind of assistance, please mail us at
            <a href="mailto:hello@tinkerhub.org">hello@tinkerhub.org</a>
        </p>
    </>
);
const DonePage = (): JSX.Element => {
    const confettiCanvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        confetti({
            particleCount: 300,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.8 },
            scalar: randomInRange(0.4, 1),
            drift: randomInRange(-0.4, 0.4),
        });
        confetti({
            particleCount: 300,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.8 },
            scalar: randomInRange(0.4, 1),
            drift: randomInRange(-0.4, 0.4),
        });
    }, []);

    return (
        <div className="w-full h-full bg-background overflow-y-auto">
            <Head>
                <title>Welcome To TinkerHub</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <ThankYouAndExistPage header={Title} subBody={subBody} />
            </Container>
            <canvas id="my-canvas" ref={confettiCanvasRef}></canvas>
        </div>
    );
};

export default DonePage;
