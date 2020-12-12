import React from 'react';
import { DefaultValues, FieldValues, FormProvider, SubmitHandler, Resolver } from 'react-hook-form';
import { useWizardForm } from './useWizardForm';
import { Button } from 'components/Button';
import clsx from 'clsx';

type WizardFormProps<T, G> = {
    children: React.ReactNode;
    onSubmit: SubmitHandler<T>;
    intialValues?: DefaultValues<G>;
    resolver?: Resolver<T>;
    buttonAlign?: 'left' | 'center' | 'right';
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WizardForm = <
    FormFieldType extends FieldValues,
    FormInitialValue extends FormFieldType
>({
    children,
    intialValues,
    onSubmit,
    buttonAlign = 'right',
    resolver,
}: WizardFormProps<FormFieldType, FormInitialValue>): JSX.Element => {
    const wizardAllSteps = React.Children.toArray(children);
    const totalSteps = wizardAllSteps.length;
    const {
        stepNumber,
        nextFormStep,
        previousFormStep,
        hookFormMethods,
        onWizardSubmit,
    } = useWizardForm<FormFieldType>({
        totalSteps,
        intialValues,
        onSubmit,
        resolver,
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
            <form onSubmit={onWizardSubmit} className="h-full">
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
                                loading={hookFormMethods.formState.isSubmitting}
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
