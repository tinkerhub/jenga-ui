import React from 'react';
import clsx from 'clsx';

export type TextFieldProps = {
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
};

export type Ref = HTMLInputElement;

const TextField = React.forwardRef<Ref, TextFieldProps>(
    (
        {
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
        }: TextFieldProps,
        ref
    ) => {
        const TextFieldType = {
            contained: `bg-white placeholder-gray-400 text-gray-700`,
        };

        return (
            <div className="flex flex-col">
                {label ? (
                    <label className="mb-2 text-current" htmlFor={name}>
                        {label}
                    </label>
                ) : null}
                <input
                    type={type}
                    onChange={onChange}
                    className={clsx(
                        TextFieldType[variant],
                        'px-3 py-3 relative rounded text-sm shadow outline-none focus:outline-none focus:ring focus:ring-primary',
                        fullWidth && 'w-full',
                        disabled && 'bg-opacity-25',
                        rounded && 'rounded'
                    )}
                    ref={ref}
                    placeholder={placeholder}
                    disabled={disabled}
                    name={name}
                />
                <small className="mt-1 text-sm font-normal text-gray-600">{helperText}</small>
            </div>
        );
    }
);

TextField.displayName = 'TextField';

export default TextField;
