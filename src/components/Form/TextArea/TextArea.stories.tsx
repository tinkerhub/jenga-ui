import React from 'react';

import TextArea from './TextArea';

export default {
    title: 'TextArea',
    component: TextArea,
};

export const Default = (): JSX.Element => {
    return <TextArea placeholder="Type your name" name="default" />;
};

export const FullWidth = (): JSX.Element => {
    return <TextArea fullWidth name="fullWidth" />;
};

export const Rounded = (): JSX.Element => {
    return <TextArea rounded name="roundedTextField" />;
};

export const Labeled = (): JSX.Element => {
    return <TextArea rounded name="roundedTextField" label="Mobile Number" />;
};

export const HelperText = (): JSX.Element => {
    return (
        <TextArea
            rounded
            name="roundedTextField"
            label="Mobile Number"
            helperText="Type your number"
        />
    );
};

export const Errored = (): JSX.Element => {
    return (
        <TextArea
            rounded
            name="roundedTextField"
            label="Mobile Number"
            helperText="Number mistaken"
            error
        />
    );
};
