import React from 'react';
import { Control, Controller } from 'react-hook-form';
import BaseSelect, { Styles } from 'react-select';
import { getOptionLabel, getOptionValue } from 'react-select/src/builtins';

type SelectProps = {
    control?: Control;
    defaultValue?: '';
    name: string;
    placeholder?: string;
    label?: string;
    helperText?: string;
    options: Array<Record<string, unknown>>;
    optionLabel: getOptionLabel;
    optionValue: getOptionValue;
};

const Select: React.FC<SelectProps> = ({
    control,
    defaultValue = '',
    options,
    name,
    placeholder = 'select',
    helperText,
    label,
    optionLabel,
    optionValue,
}) => {
    const styles: Styles = {
        control: (provided) => ({
            ...provided,
            border: 'none',
            boxShadow: ' 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        }),
    };

    return (
        <div className="flex flex-col">
            {label ? (
                <label className="mb-2 text-current" htmlFor={name}>
                    {label}
                </label>
            ) : null}
            <Controller
                name={name}
                as={BaseSelect}
                options={options}
                control={control}
                rules={{ required: true }}
                defaultValue={defaultValue}
                styles={styles}
                placeholder={placeholder}
                getOptionValue={optionValue}
                getOptionLabel={optionLabel}
            />
            <small className="mt-1 text-xs font-normal text-gray-600">{helperText}</small>
        </div>
    );
};

export default Select;