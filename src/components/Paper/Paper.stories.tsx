import React from 'react';

import Paper from './Paper';

export default {
    title: 'Paper',
    component: Paper,
};

export const Default = (): JSX.Element => {
    return (
        <Paper>
            <h1 className="text-mont text-black font-medium">Get Started</h1>
        </Paper>
    );
};

export const Rounded = (): JSX.Element => {
    return (
        <Paper rounded>
            <h1 className="text-mont text-black font-medium">Get Started</h1>
        </Paper>
    );
};
