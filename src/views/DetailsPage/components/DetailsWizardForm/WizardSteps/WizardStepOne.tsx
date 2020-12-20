/* eslint-disable @typescript-eslint/no-explicit-any */
import { useWizard } from 'components/Form/WizardForm/WizardForm';
import { renderFormData } from 'components/utils';
import React from 'react';
import { wizardStepOneFormFields } from './formFields';

export const WizardStepOne: React.FC = () => {
    const { register, control, errors } = useWizard();
    return (
        <>
            {wizardStepOneFormFields.map((el, index) =>
                renderFormData(el, index, register, control, errors?.[el.name]?.message)
            )}
        </>
    );
};
