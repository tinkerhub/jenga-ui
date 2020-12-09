/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderFormData } from 'components/utils';
import React from 'react';
import { useFormContext } from 'react-hook-form';

const wizardStepOneFormFields = [
    {
        type: 'textfield',
        label: 'Mobile Number',
        helperText: 'Please enter your 10 digit mobile number',
        disabled: true,
        name: 'MobileNumber',
    },
    {
        type: 'textfield',
        label: 'My full name is',
        helperText: 'eg: Aaron Hillel Swartz',
        name: 'FullName',
    },
    {
        type: 'date',
        label: 'I was born on',
        name: 'DOB',
    },
    {
        type: 'textfield',
        label: 'My email address is',
        name: 'Email',
    },
    {
        type: 'select',
        label: 'I prefer to use the pronoun',
        name: 'Pronoun',
        options: [
            { valueAndLabel: 'He/Him' },
            { valueAndLabel: 'She/Her' },
            { valueAndLabel: 'They/Them' },
        ],
        optionValue: (option: any): string => option.valueAndLabel,
        optionLabel: (option: any): string => `${option.valueAndLabel}`,
    },
];

const WizardStepOne: React.FC = () => {
    const { register, control } = useFormContext();
    return (
        <>
            {wizardStepOneFormFields.map((el, index) =>
                renderFormData(el, index, register, control)
            )}
        </>
    );
};

export default WizardStepOne;
