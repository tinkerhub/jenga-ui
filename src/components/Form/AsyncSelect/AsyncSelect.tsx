import React from 'react';
import { Control, Controller } from 'react-hook-form';
import BaseAsyncSelect from 'react-select/async';
import { Styles } from 'react-select';
import { getOptionLabel, getOptionValue } from 'react-select/src/builtins';

type AsyncSelectProps = {
    control?: Control;
    defaultValue?: string;
    defaultOptions?: Array<Record<string, unknown>> | boolean;
    name: string;
    placeholder?: string;
    label?: string;
    helperText?: string;
    options: () => Promise<Array<Record<string, unknown>>>;
    optionLabel: getOptionLabel;
    optionValue: getOptionValue;
};

const AsyncSelect: React.FC<AsyncSelectProps> = ({
    control,
    defaultValue,
    defaultOptions = true,
    options,
    name,
    placeholder = 'AsyncSelect',
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
                as={BaseAsyncSelect}
                control={control}
                rules={{ required: true }}
                styles={styles}
                placeholder={placeholder}
                cacheOptions
                defaultOptions={defaultOptions}
                loadOptions={options}
                getOptionValue={optionValue}
                getOptionLabel={optionLabel}
                defaultValue={defaultValue}
            />
            <small className="mt-1 text-xs font-normal text-gray-600">{helperText}</small>
        </div>
    );
};

export default AsyncSelect;
