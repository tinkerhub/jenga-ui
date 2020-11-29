import React from 'react';
import { Control, Controller } from 'react-hook-form';
import BaseDatePicker from 'react-datepicker';
import { FormFieldWrapper } from '../FormFieldWrapper';
import 'react-datepicker/dist/react-datepicker.css';
import clsx from 'clsx';

type DatePickerProps = {
    control?: Control;
    defaultValue?: string;
    error?: boolean;
    fullWidth?: boolean;
    name: string;
    placeholder?: string;
    label?: string;
    helperText?: string;
    required?: boolean;
};

const DatePicker: React.FC<DatePickerProps> = ({
    control,
    defaultValue,
    error,
    fullWidth,
    name,
    placeholder = 'date-time',
    helperText,
    label,
    required,
}) => {
    return (
        <FormFieldWrapper label={label} helperText={helperText} error={error}>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({ onChange, value }) => (
                    <BaseDatePicker
                        selected={value}
                        onChange={onChange}
                        placeholderText={placeholder}
                        popperPlacement="top-start"
                        required={required}
                        className={clsx(
                            'px-3 py-3 rounded text-sm shadow outline-none focus:outline-none focus:ring focus:ring-primary',
                            error && 'ring ring-red-600',
                            fullWidth && 'w-full'
                        )}
                    />
                )}
            />
            <style jsx>{`
                .react-datepicker-wrapper {
                    width: ${fullWidth ? '100%' : 'inherit'};
                }
                .react-datepicker__header {
                    background: none;
                    color: black;
                }
                .react-datepicker__day-name,
                .react-datepicker__current-month {
                    color: black;
                }
                .react-datepicker__navigation--next {
                    border-left-color: black;
                }
                .react-datepicker__navigation--previous {
                    border-right-color: black;
                }
            `}</style>
        </FormFieldWrapper>
    );
};

export default DatePicker;
