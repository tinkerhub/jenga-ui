import { FadeIn, Paper, WizardForm, WizardStep } from 'components';
import { useDetailsPage } from './useDetailsPage';
import { useRouter } from 'next/router';
import {
    WizardStepOne,
    WizardStepTwo,
    WizardStepThree,
} from './components/DetailsWizardForm/WizardSteps';

const DetailsPage = (): JSX.Element => {
    const {
        handleSubmit,
        register,
        isSubmitting,
        collegeList,
        control,
        verified,
    } = useDetailsPage();
    const router = useRouter();

    // if (!verified) {
    //     router.push('/');
    //     return <div />;
    // }

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
                    <WizardForm
                        onSubmit={() => {
                            console.log('submitted');
                        }}
                    >
                        <WizardStep>
                            <FadeIn duration={0.5} delay={0}>
                                <WizardStepOne />
                            </FadeIn>
                        </WizardStep>
                        <WizardStep>
                            <FadeIn duration={0.5} delay={0}>
                                <WizardStepTwo />
                            </FadeIn>
                        </WizardStep>
                        <WizardStep>
                            <FadeIn duration={0.5} delay={0}>
                                <WizardStepThree />
                            </FadeIn>
                        </WizardStep>
                    </WizardForm>
                </Paper>
            </FadeIn>
        </div>
    );
};

export default DetailsPage;
