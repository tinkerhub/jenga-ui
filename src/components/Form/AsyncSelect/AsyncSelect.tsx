import React from 'react';
import { Control, Controller } from 'react-hook-form';
import BaseAsyncSelect from 'react-select/async';
import { Styles } from 'react-select';
import { getOptionLabel, getOptionValue } from 'react-select/src/builtins';
import { FormFieldWrapper } from '../FormFieldWrapper';

type AsyncSelectProps = {
    control?: Control;
    error?: boolean;
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
    error,
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
        <FormFieldWrapper label={label} helperText={helperText} error={error}>
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
        </FormFieldWrapper>
    );
};

export default AsyncSelect;
