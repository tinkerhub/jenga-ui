/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { wizardStepThreeFormFields, wizardStepTwoFormFields } from './formFields';
import { Select, TextField } from 'components';
import { renderFormData } from 'components/utils';
import { GetSkillsListReturn, getSkillsListAPI } from 'api';
import { useFetch } from 'hooks/useFetch';

export const WizardStepThree: React.FC = () => {
    const { register, control, watch } = useFormContext();

    const watchIsStudent = watch(wizardStepTwoFormFields.isStudent.name, '');
    const watchCanMentor = watch(wizardStepTwoFormFields.canBeMentor.name, '');
    const isPro = watchIsStudent?.valueAndLabel === 'Professional';
    const isMentor = watchCanMentor?.label;

    const { data: skillFetchedList } = useFetch<GetSkillsListReturn[]>(
        [getSkillsListAPI.url],
        getSkillsListAPI.fetcher
    );

    const { address, skills } = wizardStepThreeFormFields;

    return (
        <>
            <Select
                control={control}
                name={skills.name}
                label={skills.label}
                options={skillFetchedList}
                optionLabel={skills.optionLabel}
                optionValue={skills.optionValue}
                helperText={skills.helperText(isMentor && isPro)}
                isMulti
            />
            {address.map((el, index) => renderFormData(el, index, register, control))}
            <div className="mb-4">
                <span className="block mb-2 text-current">Community policy</span>
                <small className="block mt-1 text-xs font-normal text-gray-600">
                    To ensure that everything is in order, we ask that you accept our community
                    policy & guideline before we moving forward. TinkerHub-Community-Policy Please
                    click below if you find our policy acceptable. If you want to talk, we are
                    available at hello@tinkerhub.org
                </small>
            </div>
            <TextField name="accept" type="checkbox" label="I Accept" ref={register} required />
        </>
    );
};
