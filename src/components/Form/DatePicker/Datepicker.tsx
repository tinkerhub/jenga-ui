import React from 'react';
import { Control, Controller } from 'react-hook-form';
import BaseDatePicker from 'react-datepicker';
import { FormFieldWrapper } from '../FormFieldWrapper';
import 'react-datepicker/dist/react-datepicker.css';

type DatePickerProps = {
    control?: Control;
    defaultValue?: string;
    name: string;
    placeholder?: string;
    label?: string;
    helperText?: string;
};

const DatePicker: React.FC<DatePickerProps> = ({
    control,
    defaultValue,
    name,
    placeholder = 'date-time',
    helperText,
    label,
}) => {
    return (
        <FormFieldWrapper label={label} helperText={helperText}>
            <>
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
                            className="px-3 py-3 rounded text-sm shadow outline-none focus:outline-none focus:ring focus:ring-primary"
                        />
                    )}
                />
                <style jsx>{`
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
            </>
        </FormFieldWrapper>
    );
};

export default DatePicker;
