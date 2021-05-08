import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { FadeIn, Paper } from 'components';

import { useDetailsPage } from './useDetailsPage';
import { DetailsWizardForm } from './components/DetailsWizardForm';

const DetailsPage = (): JSX.Element => {
    const { verified, submitRegistrationDetails, number } = useDetailsPage();
    const router = useRouter();

    useEffect(() => {
        if (!verified) {
            router.push('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [verified]);

    if (!verified) {
        return <div />;
    }

    return (
        <div className="w-full h-full flex justify-center ">
            <FadeIn className="py-10 max-w-sm">
                <div className="px-4 mb-12">
                    <h1>
                        Welcome to <br /> TinkerHub
                    </h1>
                    <p className="text-subtext">
                        We are thrilled to know that you want to join the TinkerHub mission.
                        Let&apos;s get started.
                    </p>
                </div>
                <Paper rounded>
                    <DetailsWizardForm
                        submitRegistrationDetails={submitRegistrationDetails}
                        intialValues={{ MobileNumber: number, DOB: '' }}
                    />
                </Paper>
            </FadeIn>
        </div>
    );
};

export default DetailsPage;
