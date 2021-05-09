import React, { useEffect } from 'react';
import { Button, FadeIn, Paper } from 'components';
import { useThankYouAndExist } from './hooks';
import { useRouter } from 'next/router';

type ThankYouAndExistPageProps = {
    header: JSX.Element;
    subBody: JSX.Element;
};

const ThankYouAndExistPage: React.FC<ThankYouAndExistPageProps> = ({ header, subBody }) => {
    const { memberID, copiedTextStatus, copyToClipboard, logout } = useThankYouAndExist();
    const router = useRouter();

    useEffect(() => {
        if (!memberID) {
            router.push('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [memberID]);

    if (!memberID) {
        return <div />;
    }

    return (
        <div className="w-full h-full flex justify-center">
            <FadeIn className="py-10 max-w-sm">
                <Paper rounded>
                    <form>
                        <div className="px-4 mb-4">
                            {header}
                            {subBody}
                        </div>
                        <hr className="mb-4" />
                        <p className="text-subtext text-center mb-4">YOUR MEMBERSHIP ID</p>
                        <h3 className="select-all text-center">{memberID}</h3>
                        <Button fullWidth className="mt-4 mb-2" rounded onClick={copyToClipboard}>
                            <span className="text-white">
                                {copiedTextStatus === 'copied' ? 'Copied' : 'Copy text'}
                            </span>
                        </Button>
                        <Button fullWidth className="mt-4" rounded onClick={logout}>
                            <span className="text-white">Logout</span>
                        </Button>
                        <a
                            target="_blank"
                            href={process.env.NEXT_PUBLIC_DISCORD_URL}
                            rel="noopener noreferrer"
                        >
                            <Button fullWidth className="mt-4" rounded variant="outlined">
                                Join discord
                            </Button>
                        </a>
                    </form>
                </Paper>
                <div className="px-5 w-full bg-white">
                    <div className="relative top-8 px-4 font-bold">
                        <h6>Join Tinkerhub Newsletter</h6>
                    </div>
                    <iframe
                        src="https://tinkerhub.substack.com/embed"
                        scrolling="no"
                        className="w-full m-0"
                        title="TinkerHub Newsletter"
                    ></iframe>
                </div>
            </FadeIn>
        </div>
    );
};

export default ThankYouAndExistPage;
