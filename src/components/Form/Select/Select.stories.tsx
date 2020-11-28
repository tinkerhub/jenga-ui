import React from 'react';
import { useForm } from 'react-hook-form';

import Select from './Select';

export default {
    title: 'Select',
    component: Select,
};

const options = [
    { label: 'Hello', value: 'World' },
    { label: 'World', value: 'Hello' },
];

export const Default = (): JSX.Element => {
    const { control } = useForm();

    return (
        <Select
            name="defaultSelect"
            options={options}
            control={control}
            placeholder="Select a value"
            optionValue={(option: any) => option}
            optionLabel={(option: any) => `${option.label}`}
        />
    );
};

export const HelperText = (): JSX.Element => {
    const { control } = useForm();

    return (
        <Select
            name="helperText"
            options={options}
            control={control}
            placeholder="Select a value"
            optionValue={(option: any) => option}
            optionLabel={(option: any) => `${option.label}`}
            label="College List"
            helperText="Select a college from the dropdown"
        />
    );
};
