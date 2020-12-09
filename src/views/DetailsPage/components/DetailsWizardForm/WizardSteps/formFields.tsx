/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getNextNYears } from 'views/DetailsPage/utils/getNextNYears';

export const wizardStepOneFormFields = [
    {
        type: 'textfield',
        label: 'Mobile Number',
        helperText: 'Please enter your 10 digit mobile number',
        disabled: true,
        name: 'MobileNumber',
    },
    {
        type: 'textfield',
        label: 'My full name is',
        helperText: 'eg: Aaron Hillel Swartz',
        name: 'FullName',
    },
    {
        type: 'date',
        label: 'I was born on',
        name: 'DOB',
    },
    {
        type: 'textfield',
        label: 'My email address is',
        name: 'Email',
    },
    {
        type: 'select',
        label: 'I prefer to use the pronoun',
        name: 'Pronoun',
        options: [
            { valueAndLabel: 'He/Him' },
            { valueAndLabel: 'She/Her' },
            { valueAndLabel: 'They/Them' },
        ],
        optionValue: (option: any): string => option.valueAndLabel,
        optionLabel: (option: any): string => `${option.valueAndLabel}`,
    },
];

/**
 * This kinda split is applied for conditional based form
 */
export const wizardStepTwoFormFields = {
    isStudent: {
        type: 'select',
        label: 'I want to be part of TinkerHub Foundation and the best way to describe me is',
        name: 'RegistrationType',
        options: [{ valueAndLabel: 'Student' }, { valueAndLabel: 'Professional' }],
        optionValue: (option: any): string => option.valueAndLabel,
        optionLabel: (option: any): string => `${option.valueAndLabel}`,
    },
    canBeMentor: {
        type: 'select',
        label: 'Can you be a mentor',
        name: 'Mentor',
        options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
        ],
        optionValue: (option: any): string => option.value,
        optionLabel: (option: any): string => `${option.label}`,
    },
    heardAboutCampusCommunity: {
        type: 'select',
        label: 'TinkerHub Campus Community is',
        name: 'CampusCommunityActive',
        options: [
            { value: 'Yes', label: 'Yes, there is an active community' },
            { value: 'No', label: 'Nope, I never heard about TinkerHub community in my college' },
        ],
        optionValue: (option: any): string => option.value,
        optionLabel: (option: any): string => `${option.label}`,
    },
    collegeList: {
        type: 'select',
        label: 'Select your college community from this list',
        name: 'College',
        options: [],
        optionValue: (option: any): string => option.id,
        optionLabel: (option: any): string => `${option.name}`,
    },
    studentDetails: [
        {
            type: 'select',
            label: 'My stream of study is',
            name: 'StudyStream',
            options: [
                { valueAndLabel: 'BTech' },
                { valueAndLabel: 'Polytechnic' },
                { valueAndLabel: 'Bachelor of Science' },
                { valueAndLabel: 'High School / Higher Secondary' },
                { valueAndLabel: 'Bachelor of Arts' },
                { valueAndLabel: 'Post Graduation Programs' },
            ],
            optionValue: (option: any): string => option.valueAndLabel,
            optionLabel: (option: any): string => `${option.valueAndLabel}`,
        },
        {
            type: 'select',
            label: "As of now, I'll be graduating on",
            name: 'GraduationDate',
            options: getNextNYears(5).map((el) => ({ valueAndLabel: el })),
            optionValue: (option: any): string => option.valueAndLabel,
            optionLabel: (option: any): string => `${option.valueAndLabel}`,
        },
    ],
};
