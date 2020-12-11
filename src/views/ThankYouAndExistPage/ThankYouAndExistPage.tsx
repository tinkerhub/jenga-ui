import React from 'react';
import { Button, FadeIn, Paper } from 'components';
import { useThankYouAndExist } from './hooks';
import { useRouter } from 'next/router';

type ThankYouAndExistPageProps = {
    header: JSX.Element;
    subBody: JSX.Element;
};

const ThankYOuAndExistPage: React.FC<ThankYouAndExistPageProps> = ({ header, subBody }) => {
    const { memberID, copiedTextStatus, copyToClipboard, logout } = useThankYouAndExist();
    const router = useRouter();

    if (!memberID) {
        router.push('/');
        return <div />;
    }

    return (
        <div className="w-full h-full flex justify-center">
            <FadeIn className="py-10 max-w-sm">
                <div className="px-4 mb-12">
                    {header}
                    {subBody}
                </div>
                <Paper rounded>
                    <form>
                        <hr className="mb-4" />
                        <p>YOUR MEMBERSHIP ID</p>
                        <h1 className="select-all">{memberID}</h1>
                        <Button fullWidth className="mt-4 mb-2" rounded onClick={copyToClipboard}>
                            <span className="text-white">
                                {copiedTextStatus === 'copied' ? 'Copied' : 'Copy text'}
                            </span>
                        </Button>
                        <Button fullWidth className="mt-4" rounded onClick={logout}>
                            <span className="text-white">Logout</span>
                        </Button>
                    </form>
                </Paper>
            </FadeIn>
            <div className="absolute bottom-4 right-4 hidden md:block">
                <iframe
                    src="https://tinkerhub.substack.com/embed"
                    style={{ border: '1px solid #EEE', background: 'white' }}
                    scrolling="no"
                    title="TinkerHub Newsletter"
                ></iframe>
            </div>
        </div>
    );
};

export default ThankYOuAndExistPage;
