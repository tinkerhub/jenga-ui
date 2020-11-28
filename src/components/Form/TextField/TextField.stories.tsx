import React from 'react';

import TextField from './TextField';

export default {
    title: 'TextField',
    component: TextField,
};

export const Default = (): JSX.Element => {
    return <TextField placeholder="Type your name" name="default" />;
};

export const FullWidth = (): JSX.Element => {
    return <TextField fullWidth name="fullWidth" />;
};

export const Rounded = (): JSX.Element => {
    return <TextField rounded name="roundedTextField" />;
};

export const Labeled = (): JSX.Element => {
    return <TextField rounded name="roundedTextField" label="Mobile Number" />;
};

export const HelperText = (): JSX.Element => {
    return (
        <TextField
            rounded
            name="roundedTextField"
            label="Mobile Number"
            helperText="Type your number"
        />
    );
};

export const Errored = (): JSX.Element => {
    return (
        <TextField
            rounded
            name="roundedTextField"
            label="Mobile Number"
            helperText="Number mistaken"
            error
        />
    );
};
