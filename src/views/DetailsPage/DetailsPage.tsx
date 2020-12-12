import { FadeIn, Paper } from 'components';
import { useDetailsPage } from './useDetailsPage';
import { useRouter } from 'next/router';

import { DetailsWizardForm } from './components/DetailsWizardForm';

const DetailsPage = (): JSX.Element => {
    const { verified, submitRegistrationDetails, number } = useDetailsPage();
    const router = useRouter();

    if (!verified) {
        router.push('/');
        return <div />;
    }

    return (
        <div className="w-full h-full flex justify-center ">
            <FadeIn className="py-10 max-w-sm">
                <div className="px-4 mb-12">
                    <h1 className="font-semibold">
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
