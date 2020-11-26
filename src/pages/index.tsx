import Head from 'next/head';

const Home = (): JSX.Element => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="text-blue-400 text-4xl text-center">Hello World</div>
        </div>
    );
};

export default Home;
