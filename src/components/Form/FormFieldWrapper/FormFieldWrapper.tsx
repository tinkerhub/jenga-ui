import React from 'react';

type FormWrapperProps = {
    label?: string;
    helperText?: string;
};

const FormWrapper: React.FC<FormWrapperProps> = ({ children, helperText, label }) => {
    return (
        <div>
            {label ? <label className="mb-2 text-current">{label}</label> : null}
            <br />
            {children}
            <br />
            <small className="mt-1 text-xs font-normal text-gray-600">{helperText}</small>
        </div>
    );
};

export default FormWrapper;
