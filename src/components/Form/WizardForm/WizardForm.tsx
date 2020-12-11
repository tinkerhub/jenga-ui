import React from 'react';
import { FormProvider } from 'react-hook-form';
import { useWizardForm } from './useWizardForm';
import { Button } from 'components/Button';
import clsx from 'clsx';

type WizardFormProps = {
    intialValues?: Record<string, unknown>;
    onSubmit: () => void;
    buttonAlign?: 'left' | 'center' | 'right';
};

export const WizardForm: React.FC<WizardFormProps> = ({
    children,
    intialValues,
    onSubmit,
    buttonAlign = 'right',
}) => {
    const wizardAllSteps = React.Children.toArray(children);
    const totalSteps = wizardAllSteps.length;
    const { stepNumber, nextFormStep, previousFormStep, hookFormMethods } = useWizardForm({
        totalSteps,
        intialValues,
    });
    const isLastStep = stepNumber === totalSteps - 1;
    const isFirstStep = stepNumber === 0;
    const wizardStep = wizardAllSteps[stepNumber];

    const buttonAlignment = {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
    };

    return (
        <FormProvider {...hookFormMethods}>
            <form onSubmit={hookFormMethods.handleSubmit(onSubmit)} className="h-full">
                <div className="h-full flex flex-col">
                    {wizardStep}
                    <div className={clsx('flex items-center', buttonAlignment[buttonAlign])}>
                        <div>
                            <Button
                                color="primary"
                                variant="outlined"
                                onClick={previousFormStep}
                                disabled={isFirstStep}
                                rounded
                            >
                                Go Back
                            </Button>
                        </div>
                        <div>
                            <Button
                                color="primary"
                                onClick={nextFormStep}
                                className={isLastStep ? 'hidden' : 'block'}
                                rounded
                            >
                                <span className="text-white">Next</span>
                            </Button>
                        </div>
                        <div>
                            <Button
                                color="primary"
                                onClick={nextFormStep}
                                className={!isLastStep ? 'hidden' : 'block'}
                                type="submit"
                                rounded
                            >
                                <span className="text-white">Submit</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

export const WizardStep: React.FC = ({ children }) => <>{children}</>;

export default WizardForm;
