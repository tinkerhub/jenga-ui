import React from 'react';
import { useForm } from 'react-hook-form';

import Datepicker from './Datepicker';

export default {
    title: 'Date Picker',
    component: Datepicker,
};

export const Default = (): JSX.Element => {
    const { control } = useForm();
    return <Datepicker placeholder="Input date" name="default" control={control} />;
};

export const HelperText = (): JSX.Element => {
    const { control } = useForm();
    return (
        <Datepicker
            placeholder="Input date"
            name="default"
            control={control}
            label="Birth Date"
            helperText="Input your birthdate"
        />
    );
};

export const FullWidth = (): JSX.Element => {
    const { control } = useForm();
    return (
        <Datepicker
            placeholder="Input date"
            name="default"
            control={control}
            label="Birth Date"
            helperText="Input your birthdate"
            fullWidth
        />
    );
};
