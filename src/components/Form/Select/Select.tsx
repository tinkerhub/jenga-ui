import React from 'react';
import { Control, Controller } from 'react-hook-form';
import BaseSelect, { Styles } from 'react-select';
import { getOptionLabel, getOptionValue } from 'react-select/src/builtins';
import { FormFieldWrapper } from '../FormFieldWrapper';

type SelectProps = {
    control?: Control;
    defaultValue?: '';
    error?: boolean;
    name: string;
    placeholder?: string;
    label?: string;
    helperText?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options?: Array<Record<string, any>>;
    optionLabel: getOptionLabel | undefined;
    optionValue: getOptionValue | undefined;
};

const Select: React.FC<SelectProps> = ({
    control,
    defaultValue = '',
    error,
    options = [],
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
        <FormFieldWrapper label={label} helperText={helperText} error={error}>
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
        </FormFieldWrapper>
    );
};

export default Select;
