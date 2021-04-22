import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import {
    DefaultValues,
    FieldValues,
    SubmitHandler,
    Resolver,
    UseFormMethods,
    useForm,
    UnpackNestedValue,
} from 'react-hook-form';
import { Button } from 'components/Button';
import clsx from 'clsx';

const WizardContext = createContext({});

type WizardFormProps<T, G> = {
    children: React.ReactNode;
    onSubmit: SubmitHandler<T>;
    initialValues?: DefaultValues<G>;
    resolver?: Resolver<T>;
    buttonAlign?: 'left' | 'center' | 'right';
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WizardForm = <
    FormFieldType extends FieldValues,
    FormInitialValue extends FormFieldType
>({
    children,
    initialValues,
    onSubmit,
    buttonAlign = 'right',
}: WizardFormProps<FormFieldType, FormInitialValue>): JSX.Element => {
    const wizardAllSteps = React.Children.toArray(children);
    const snapShot = useRef<Partial<FormFieldType>>({});
    const totalSteps = wizardAllSteps.length;
    const [stepNumber, setStepNumber] = useState(0);
    const isLastStep = stepNumber === totalSteps - 1;
    const isFirstStep = stepNumber === 0;
    const wizardStep = wizardAllSteps[stepNumber] as React.ReactElement;

    const hookFormMethods = useForm<FormFieldType>({
        defaultValues: initialValues,
        resolver: wizardStep.props.validation,
    });

    useEffect(() => {
        if (stepNumber in snapShot) {
            hookFormMethods.reset(snapShot.current[stepNumber]);
        } else {
            hookFormMethods.reset(initialValues);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stepNumber]);

    const nextFormStep = (): void => {
        setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
    };

    const previousFormStep = (): void => {
        setStepNumber(Math.max(stepNumber - 1, 0));
    };

    const buttonAlignment = {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
    };

    const onFormSubmit: SubmitHandler<FormFieldType> = async (
        data: UnpackNestedValue<FormFieldType>
    ) => {
        if (wizardStep.props.onSubmit) {
            await wizardStep.props.onSubmit(data);
        }
        snapShot.current = { ...snapShot.current, [stepNumber]: data };
        if (!isLastStep) {
            nextFormStep();
        } else {
            let req = {} as UnpackNestedValue<FormFieldType>;
            for (let snap = 0; snap < totalSteps; snap++) {
                req = { ...req, ...snapShot.current[snap] };
            }
            return onSubmit(req);
        }
    };

    return (
        <form onSubmit={hookFormMethods.handleSubmit(onFormSubmit)} className="h-full">
            <div className="h-full flex flex-col">
                <WizardContext.Provider value={{ ...hookFormMethods }}>
                    {wizardStep}
                </WizardContext.Provider>
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
                            type="submit"
                            loading={hookFormMethods.formState.isSubmitting}
                            disabled={hookFormMethods.formState.isSubmitting}
                            rounded
                        >
                            <span className="text-white">{isLastStep ? 'Submit' : 'Next'}</span>
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
};

type WizardStepProps<T> = {
    children: React.ReactNode;
    onSubmit?: () => Promise<void>;
    validation?: Resolver<T>;
};

export const WizardStep = <T extends FieldValues>({
    children,
}: WizardStepProps<T>): JSX.Element => <>{children}</>;

export const useWizard = (): UseFormMethods => useContext(WizardContext) as UseFormMethods;

export default WizardForm;
