import React from 'react';

import Container from './Container';

export default {
    title: 'Container',
    component: Container,
};

export const Default = (): JSX.Element => {
    return (
        <Container>
            <h1 className="text-mont text-gray-500 font-medium">Get Started</h1>
        </Container>
    );
};
