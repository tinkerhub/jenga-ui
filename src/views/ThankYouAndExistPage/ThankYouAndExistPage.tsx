import React, { useState } from 'react';
import { Button, Paper } from 'components';
import { Transition } from '@headlessui/react';

type ThankYouAndExistPageProps = {
    header: JSX.Element;
    subBody: JSX.Element;
    memberShipID: string;
};

const ThankYOuAndExistPage: React.FC<ThankYouAndExistPageProps> = ({
    header,
    subBody,
    memberShipID,
}) => {
    const [copiedTextStatus, setCopiedTextStatus] = useState('');

    const copyToClipboard = (): void => {
        navigator.clipboard.writeText(memberShipID);
        setCopiedTextStatus('copied');
    };

    return (
        <div className="w-full h-full flex justify-center ">
            <Transition
                show={true}
                enter="transition-opacity duration-200 ease-in-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                {(ref) => (
                    <div className="py-10 max-w-sm" ref={ref}>
                        <div className="px-4 mb-12">
                            {header}
                            {subBody}
                        </div>
                        <Paper rounded>
                            <form>
                                <hr className="mb-4" />
                                <p>YOUR MEMBERSHIP ID</p>
                                <h1>{memberShipID}</h1>
                                <Button
                                    fullWidth
                                    className="mt-4"
                                    rounded
                                    onClick={copyToClipboard}
                                >
                                    <span className="text-white">
                                        {copiedTextStatus === 'copied' ? 'Copied' : 'Copy text'}
                                    </span>
                                </Button>
                            </form>
                        </Paper>
                    </div>
                )}
            </Transition>
        </div>
    );
};

export default ThankYOuAndExistPage;
