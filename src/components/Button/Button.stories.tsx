import React from 'react';

import Button from './Button';

export default {
    title: 'Button',
    component: Button,
};

export const DefaultButton = (): JSX.Element => {
    return (
        <Button variant="contained">
            <span className="text-mont text-white font-medium">Get Started</span>
        </Button>
    );
};

export const FullWidth = (): JSX.Element => {
    return (
        <Button variant="contained" fullWidth>
            <span className="text-mont text-white font-medium">Get Started</span>
        </Button>
    );
};

export const RoundedButton = (): JSX.Element => {
    return (
        <Button variant="contained" rounded>
            <span className="text-mont text-white font-medium">Get Started</span>
        </Button>
    );
};

export const Loading = (): JSX.Element => {
    return (
        <Button variant="contained" loading={true}>
            <span className="text-mont text-white font-medium">Get Started</span>
        </Button>
    );
};

export const Outlined = (): JSX.Element => {
    return (
        <Button variant="outlined">
            <span className="text-mont font-medium">Get Started</span>
        </Button>
    );
};
