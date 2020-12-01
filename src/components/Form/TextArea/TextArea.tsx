import React from 'react';
import clsx from 'clsx';
import { FormFieldWrapper } from '../FormFieldWrapper';

export type TextAreaProps = {
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
    rows?: number;
    cols?: number;
    type?: 'text' | 'password' | 'number';
    rounded?: boolean;
    required?: boolean;
};

export type Ref = HTMLTextAreaElement;

const TextArea = React.forwardRef<Ref, TextAreaProps>(
    (
        {
            error,
            name,
            onChange,
            variant = 'contained',
            fullWidth = false,
            disabled = false,
            rounded = false,
            placeholder,
            label,
            helperText,
            required,
            rows = 10,
            cols = 30,
        }: TextAreaProps,
        ref
    ) => {
        const TextAreaType = {
            contained: `bg-white placeholder-gray-400 text-gray-700`,
        };

        return (
            <FormFieldWrapper label={label} helperText={helperText} error={error}>
                <textarea
                    onChange={onChange}
                    className={clsx(
                        TextAreaType[variant],
                        'block px-3 py-3 relative rounded text-sm shadow outline-none focus:outline-none focus:ring focus:ring-primary',
                        error && ' ring ring-red-600',
                        fullWidth && 'w-full',
                        disabled && 'bg-opacity-25 bg-gray-400',
                        rounded && 'rounded'
                    )}
                    ref={ref}
                    placeholder={placeholder}
                    disabled={disabled}
                    name={name}
                    required={required}
                    rows={rows}
                    cols={cols}
                />
            </FormFieldWrapper>
        );
    }
);

TextArea.displayName = 'TextArea';

export default TextArea;
