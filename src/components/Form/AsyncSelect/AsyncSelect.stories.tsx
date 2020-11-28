/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useForm } from 'react-hook-form';

import AsyncSelect from './AsyncSelect';

export default {
    title: 'AsyncSelect',
    component: AsyncSelect,
};

const options = (): Promise<Array<Record<string, unknown>>> =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { label: 'Hello', value: 'World' },
                { label: 'World', value: 'Hello' },
            ]);
        }, 2000);
    });

export const Default = (): JSX.Element => {
    const { control } = useForm();

    return (
        <AsyncSelect
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
        <AsyncSelect
            name="defaultSelect"
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
