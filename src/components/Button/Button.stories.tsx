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

const onAsyncClick = (): Promise<void> =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log('hgello');
            resolve();
        }, 2000);
    });

export const Loading = (): JSX.Element => {
    return (
        <Button variant="contained" onClick={onAsyncClick}>
            <span className="text-mont text-white font-medium">Get Started</span>
        </Button>
    );
};
