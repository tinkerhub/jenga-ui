import React from 'react';
import { FadeIn, WizardForm, WizardStep } from 'components';
import { DefaultValues, FieldValues, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { WizardStepOne, WizardStepTwo, WizardStepThree } from './WizardSteps';

type Option = {
    label: string;
    value: string;
};

const PickAnOptionValidator = Yup.object()
    .shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
    })
    .nullable();

const requiredErrorStatement = (value: string): string => `Please type your ${value}`;

const registerFormValidator = {
    stepOne: Yup.object().shape({
        FullName: Yup.string().required(requiredErrorStatement('full name')),
        DOB: Yup.date().required(requiredErrorStatement('DOB')),
        Email: Yup.string().required(requiredErrorStatement('email')),
        Pronoun: PickAnOptionValidator.nullable().required('Please pick an option'),
    }),
    stepTwo: Yup.object().shape({
        CampusCommunityActive: Yup.object()
            .nullable()
            .when('RegistrationType', {
                is: (val: Option) => val?.value === 'Student',
                then: PickAnOptionValidator.nullable().required(
                    requiredErrorStatement('Please pick an option')
                ),
            }),
        College: Yup.object().when('CampusCommunityActive', {
            is: (val: Option) => val?.value === 'Yes',
            then: Yup.object()
                .shape({
                    id: Yup.string().required(),
                    name: Yup.string().required(),
                })
                .nullable()
                .required('Please pick a college'),
        }),
        StudyStream: Yup.object().when('RegistrationType', {
            is: (val: Option) => val?.value === 'Student',
            then: PickAnOptionValidator.required(),
        }),
        GraduationDate: Yup.object().when('RegistrationType', {
            is: (val: Option) => val?.value === 'Student',
            then: PickAnOptionValidator.required(),
        }),
        Mentor: Yup.object()
            .nullable()
            .when('RegistrationType', {
                is: (val: Option) => val?.value === 'Professional',
                then: PickAnOptionValidator.required(),
            }),
        RegistrationType: PickAnOptionValidator.nullable().required('Please pick an option'),
        FreshCollege: Yup.string()
            .nullable()
            .when('CampusCommunityActive', {
                is: (val: Option) => val?.value === 'No',
                then: Yup.string().required('Type your college name'),
            }),
    }),
    stepThree: Yup.object().shape({
        accept: Yup.boolean().required(),
        My_Skills: Yup.array()
            .nullable()
            .max(5, 'Pick 5 skills maximum')
            .of(
                Yup.object().shape({
                    id: Yup.string().required(),
                    name: Yup.string().required(),
                })
            ),
        House_Name: Yup.string(),
        Street: Yup.string(),
        District: PickAnOptionValidator.nullable(),
        Pincode: Yup.string(),
    }),
};

type DetailsWizardFormProps<T, G> = {
    submitRegistrationDetails: SubmitHandler<T>;
    intialValues?: DefaultValues<G>;
};

const DetailsWizardForm = <
    RegisterFormFieldType extends FieldValues,
    InitialFormFieldType extends RegisterFormFieldType
>({
    submitRegistrationDetails,
    intialValues,
}: DetailsWizardFormProps<RegisterFormFieldType, InitialFormFieldType>): JSX.Element => {
    return (
        <WizardForm onSubmit={submitRegistrationDetails} initialValues={intialValues}>
            <WizardStep validation={yupResolver(registerFormValidator.stepOne)}>
                <FadeIn duration={0.5} delay={0}>
                    <WizardStepOne />
                </FadeIn>
            </WizardStep>
            <WizardStep validation={yupResolver(registerFormValidator.stepTwo)}>
                <FadeIn duration={0.5} delay={0}>
                    <WizardStepTwo />
                </FadeIn>
            </WizardStep>
            <WizardStep validation={yupResolver(registerFormValidator.stepThree)}>
                <FadeIn duration={0.5} delay={0}>
                    <WizardStepThree />
                </FadeIn>
            </WizardStep>
        </WizardForm>
    );
};

export default DetailsWizardForm;
