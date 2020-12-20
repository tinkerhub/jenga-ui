import React, { useEffect } from 'react';
import { Button, FadeIn, Paper } from 'components';
import { useThankYouAndExist } from './hooks';
import { useRouter } from 'next/router';
import { Newsletter } from './components/Newsletter';
import { useToggle } from 'hooks/useToggle';
import { useTimeoutState } from 'hooks/useTimeoutState';

type ThankYouAndExistPageProps = {
    header: JSX.Element;
    subBody: JSX.Element;
};

const ThankYOuAndExistPage: React.FC<ThankYouAndExistPageProps> = ({ header, subBody }) => {
    const { memberID, copiedTextStatus, copyToClipboard, logout } = useThankYouAndExist();
    const [isNewsletterOpen, toggleNewsLetterOpen] = useToggle(true);
    const [newsLetterPop, setNewsLetterPop] = useTimeoutState(3000);
    const router = useRouter();

    useEffect(() => {
        setNewsLetterPop(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!memberID) {
        router.push('/');
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
                    </form>
                </Paper>
            </FadeIn>
            <Newsletter
                isOpen={!newsLetterPop && isNewsletterOpen}
                handleClose={() => toggleNewsLetterOpen(false)}
            />
        </div>
    );
};

export default ThankYOuAndExistPage;
