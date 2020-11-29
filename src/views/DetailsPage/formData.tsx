import { getNextNYears } from './utils/getNextNYears';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const formData = [
    {
        type: 'textfield',
        label: 'Mobile Number',
        helperText: 'Please enter your 10 digit mobile number',
        disabled: true,
        name: 'MobileNumber',
    },
    {
        type: 'textfield',
        label: 'My legal name is',
        helperText: 'eg: Aaron Hillel Swartz',
        name: 'FullName',
    },
    {
        type: 'textfield',
        label: 'Please call me',
        helperText: 'Use your first name or a nickname. eg: aaron, psbots, meharmp',
        name: 'NickName',
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
            { valueAndlabel: 'He/Him' },
            { valueAndlabel: 'She/Her' },
            { valueAndlabel: 'They/Them' },
        ],
        optionValue: (option: any): string => option.valueAndlabel,
        optionLabel: (option: any): string => `${option.valueAndlabel}`,
    },
    {
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
    {
        type: 'select',
        label: 'Select your college community from this list',
        name: 'College',
        options: [
            { id: 'Yes', name: 'Yes, there is an active community' },
            { id: 'No', name: 'Nope, I never heard about TinkerHub community in my college' },
        ],
        optionValue: (option: any): string => option.id,
        optionLabel: (option: any): string => `${option.name}`,
    },
    {
        type: 'select',
        label: 'My stream of study is',
        name: 'StudyStream',
        options: [
            { valueAndlabel: 'BTech' },
            { valueAndlabel: 'Polytechnic' },
            { valueAndlabel: 'They/Them' },
            { valueAndlabel: 'Bachelor of Science' },
            { valueAndlabel: 'Bachelor of Arts' },
            { valueAndlabel: 'Post Graduation Programs' },
        ],
        optionValue: (option: any): string => option.valueAndlabel,
        optionLabel: (option: any): string => `${option.valueAndlabel}`,
    },
    {
        type: 'select',
        label: 'My stream of study is',
        name: 'As of now, I&apos;ll be graduating on',
        options: getNextNYears(5).map((el) => ({ valueAndlabel: el })),
        optionValue: (option: any): string => option.valueAndlabel,
        optionLabel: (option: any): string => `${option.valueAndlabel}`,
    },
    {
        type: 'textfield',
        label: 'I want to join Tinkerhub because..',
        helperText:
            'This answer will help us to understand you better and handle your application accordingly.',
        name: 'Reason',
    },
];
