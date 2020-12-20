/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormMethods } from 'react-hook-form';
import { TextField, TextArea, Select, Datepicker } from '../index';

type FormFields = {
    type: string;
    label: string;
    helperText?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    name: string;
    options?: Record<string, unknown>[];
    optionValue?: (option: any) => string;
    optionLabel?: (option: any) => string;
};

export const renderFormData = (
    {
        type,
        name,
        disabled,
        label,
        helperText,
        options,
        optionLabel,
        optionValue,
        placeholder,
        required,
    }: FormFields,
    key: string | number,
    register?: UseFormMethods['register'],
    control?: UseFormMethods['control'],
    error?: string
): JSX.Element => {
    switch (type) {
        case 'textfield':
            return (
                <TextField
                    name={name}
                    label={label}
                    helperText={error || helperText}
                    required={required}
                    fullWidth
                    disabled={disabled}
                    ref={register}
                    key={key}
                    placeholder={placeholder}
                    error={Boolean(error)}
                />
            );
        case 'textArea':
            return (
                <TextArea
                    name={name}
                    label={label}
                    helperText={error || helperText}
                    required={required}
                    fullWidth
                    ref={register}
                    key={key}
                    placeholder={placeholder}
                    error={Boolean(error)}
                />
            );
        case 'date':
            return (
                <Datepicker
                    name={name}
                    label={label}
                    helperText={error || helperText}
                    required={required}
                    fullWidth
                    control={control}
                    key={key}
                    placeholder={placeholder}
                    defaultValue=""
                    error={Boolean(error)}
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
                    placeholder={placeholder}
                    error={Boolean(error)}
                    helperText={error || helperText}
                />
            );
        default:
            return <></>;
    }
};
