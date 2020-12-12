/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderFormData } from 'components/utils';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { wizardStepOneFormFields } from './formFields';

export const WizardStepOne: React.FC = () => {
    const { register, control, errors } = useFormContext();
    return (
        <>
            {wizardStepOneFormFields.map((el, index) =>
                renderFormData(el, index, register, control, errors?.[el.name]?.message)
            )}
        </>
    );
};
