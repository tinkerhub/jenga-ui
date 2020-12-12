import { useState } from 'react';
import {
    DeepPartial,
    FieldValues,
    Resolver,
    SubmitHandler,
    UnpackNestedValue,
    useForm,
    UseFormMethods,
} from 'react-hook-form';

type useWizardFormProps<T> = {
    totalSteps: number;
    intialValues?: UnpackNestedValue<DeepPartial<T>>;
    onSubmit: SubmitHandler<T>;
    resolver?: Resolver<T>;
};

type useWizardFormReturn<T> = {
    stepNumber: number;
    nextFormStep: () => void;
    previousFormStep: () => void;
    hookFormMethods: UseFormMethods<T>;
    onWizardSubmit: HTMLFormElement['submit'];
};

export const useWizardForm = <FormFieldType extends FieldValues>({
    totalSteps,
    intialValues,
    onSubmit,
    resolver,
}: useWizardFormProps<FormFieldType>): useWizardFormReturn<FormFieldType> => {
    const [stepNumber, setStepNumber] = useState(0);

    const hookFormMethods = useForm<FormFieldType>({
        shouldUnregister: false,
        defaultValues: intialValues,
        resolver,
        reValidateMode: 'onChange',
    });

    const nextFormStep = (): void => {
        setStepNumber(Math.min(stepNumber + 1, totalSteps - 1));
    };

    const previousFormStep = (): void => {
        setStepNumber(Math.max(stepNumber - 1, 0));
    };

    return {
        stepNumber,
        nextFormStep,
        previousFormStep,
        onWizardSubmit: hookFormMethods.handleSubmit(onSubmit),
        hookFormMethods,
    };
};
