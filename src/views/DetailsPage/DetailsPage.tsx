import {
    Button,
    Datepicker,
    Paper,
    Select,
    TextArea,
    TextField,
    WizardForm,
    WizardStep,
} from 'components';
import { Transition } from '@headlessui/react';
import { formData } from './formData';
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
            <Transition
                show={true}
                enter="transition-opacity duration-1000 ease-in-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="py-10 max-w-sm"
            >
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
                            <WizardStepOne />
                        </WizardStep>
                        <WizardStep>
                            <WizardStepTwo />
                        </WizardStep>
                        <WizardStep>
                            <WizardStepThree />
                        </WizardStep>
                    </WizardForm>
                </Paper>
            </Transition>
        </div>
    );
};

export default DetailsPage;
