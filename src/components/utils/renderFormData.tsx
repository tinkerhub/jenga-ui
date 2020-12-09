/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormMethods } from 'react-hook-form';
import { TextField, TextArea, Select, Datepicker } from '../index';

type FormFields = {
    type: string;
    label: string;
    helperText?: string;
    disabled?: boolean;
    name: string;
    options?: Record<string, unknown>[];
    optionValue?: (option: any) => string;
    optionLabel?: (option: any) => string;
};

export const renderFormData = (
    { type, name, disabled, label, helperText, options, optionLabel, optionValue }: FormFields,
    key: string | number,
    register?: UseFormMethods['register'],
    control?: UseFormMethods['control']
): JSX.Element => {
    switch (type) {
        case 'textfield':
            return (
                <TextField
                    name={name}
                    label={label}
                    helperText={helperText}
                    required
                    fullWidth
                    disabled={disabled}
                    ref={register}
                    key={key}
                />
            );
        case 'textArea':
            return (
                <TextArea
                    name={name}
                    label={label}
                    helperText={helperText}
                    required
                    fullWidth
                    ref={register}
                    key={key}
                />
            );
        case 'date':
            return (
                <Datepicker
                    name={name}
                    label={label}
                    helperText={helperText}
                    required
                    fullWidth
                    control={control}
                    key={key}
                />
            );
        case 'select':
            return (
                <Select
                    label={label}
                    name={name}
                    options={options}
                    optionLabel={optionLabel}
                    optionValue={optionValue}
                    control={control}
                    key={key}
                />
            );
        default:
            return <></>;
    }
};
