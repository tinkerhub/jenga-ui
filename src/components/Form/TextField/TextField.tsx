import React from 'react';
import clsx from 'clsx';
import { FormFieldWrapper } from '../FormFieldWrapper';

export type TextFieldProps = {
    error?: boolean;
    onChange?: () => void;
    variant?: 'contained';
    color?: 'primary' | 'secondary';
    placeholder?: string;
    label?: string;
    helperText?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    name: string;
    type?: 'text' | 'password' | 'number';
    rounded?: boolean;
    required?: boolean;
};

export type Ref = HTMLInputElement;

const TextField = React.forwardRef<Ref, TextFieldProps>(
    (
        {
            error,
            name,
            onChange,
            variant = 'contained',
            fullWidth = false,
            disabled = false,
            type = 'text',
            rounded = false,
            placeholder,
            label,
            helperText,
            required,
        }: TextFieldProps,
        ref
    ) => {
        const TextFieldType = {
            contained: `bg-white placeholder-gray-400 text-gray-700`,
        };

        return (
            <FormFieldWrapper label={label} helperText={helperText} error={error}>
                <input
                    type={type}
                    onChange={onChange}
                    className={clsx(
                        TextFieldType[variant],
                        'block px-3 py-3 relative rounded text-sm shadow outline-none focus:outline-none focus:ring focus:ring-primary',
                        error && ' ring ring-red-600',
                        fullWidth && 'w-full',
                        disabled && 'bg-opacity-25',
                        rounded && 'rounded'
                    )}
                    ref={ref}
                    placeholder={placeholder}
                    disabled={disabled}
                    name={name}
                    required={required}
                />
            </FormFieldWrapper>
        );
    }
);

TextField.displayName = 'TextField';

export default TextField;
