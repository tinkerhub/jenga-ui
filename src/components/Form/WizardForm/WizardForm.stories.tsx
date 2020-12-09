import React from 'react';
import { TextField } from '../TextField';

import WizardForm, { WizardStep } from './WizardForm';

export default {
    title: 'Wizard Form',
    component: WizardForm,
};

export const DefaultButton = (): JSX.Element => {
    return (
        <WizardForm
            onSubmit={() => {
                alert('Submitted');
            }}
        >
            <WizardStep>
                <TextField name="Name" label="Full Name" helperText="Type your full name" />
            </WizardStep>
            <WizardStep>
                <TextField name="hName" label="House Name" helperText="Type your house name" />
            </WizardStep>
        </WizardForm>
    );
};
