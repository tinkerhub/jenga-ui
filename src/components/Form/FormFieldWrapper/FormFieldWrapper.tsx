import React from 'react';
import clsx from 'clsx';

type FormWrapperProps = {
    label?: string;
    helperText?: string;
    error?: boolean;
};

const FormWrapper: React.FC<FormWrapperProps> = ({ children, helperText, label, error }) => {
    return (
        <div>
            {label ? <label className="block mb-2 text-current">{label}</label> : null}
            {children}
            <small
                className={clsx(
                    'block mt-1 text-xs font-normal text-gray-600',
                    error && 'text-red-600'
                )}
            >
                {helperText}
            </small>
        </div>
    );
};

export default FormWrapper;
