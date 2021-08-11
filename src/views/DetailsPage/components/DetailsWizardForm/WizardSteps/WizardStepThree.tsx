/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { wizardStepThreeFormFields, wizardStepTwoFormFields } from './formFields';
import { Select, TextField } from 'components';
import { renderFormData } from 'components/utils';
import { GetSkillsListReturn, getSkillsListAPI } from 'api';
import { useFetch } from 'hooks/useFetch';
import { useWizard } from 'components/Form/WizardForm/WizardForm';

export const WizardStepThree: React.FC = () => {
    const { register, control, watch, errors } = useWizard();

    const watchIsStudent = watch(wizardStepTwoFormFields.isStudent.name, '');
    const watchCanMentor = watch(wizardStepTwoFormFields.canBeMentor.name, '');
    const isPro = watchIsStudent?.value === 'Professional';
    const isMentor = watchCanMentor?.value;

    const { data: skillFetchedList } = useFetch<GetSkillsListReturn[]>(
        [getSkillsListAPI.url],
        getSkillsListAPI.fetcher
    );

    const { address, skills, isPookalam } = wizardStepThreeFormFields;

    return (
        <>
            <Select
                control={control}
                name={skills.name}
                label={skills.label}
                options={skillFetchedList}
                optionLabel={skills.optionLabel}
                optionValue={skills.optionValue}
                helperText={errors?.[skills.name]?.message || skills.helperText(isMentor && isPro)}
                isMulti
                error={Boolean(errors?.[skills.name]?.message)}
            />
            <Select
                control={control}
                name={isPookalam.name}
                label={isPookalam.label}
                options={isPookalam.options}
                optionLabel={isPookalam.optionLabel}
                optionValue={isPookalam.optionValue}
                helperText={errors?.[isPookalam.name]?.message || isPookalam.helperText}
                error={Boolean(errors?.[isPookalam.name]?.message)}
            />
            <div className="mb-4 mt-4">
                <small className="block mt-1 text-xs font-normal text-gray-600">
                    Feel free to skip the next section if you don&apos;t want swags in future{' '}
                    <span role="img" aria-label="smiley">
                        😁
                    </span>
                </small>
            </div>
            {address.map((el, index) =>
                renderFormData(el, index, register, control, errors?.[el.name]?.message)
            )}
            <div className="mb-4">
                <span className="block mb-2 text-current">Community policy</span>
                <small className="block mt-1 text-xs font-normal text-gray-600">
                    To ensure that everything is in order, we ask that you accept our community
                    policy & guideline before we moving forward.{' '}
                    <a
                        href="//www.notion.so/TinkerHub-Community-Policy-1-0-39eac3b2b25e43f58efb2243b647234c"
                        target="__blank"
                        className="link"
                    >
                        TinkerHub-Community-Policy
                    </a>{' '}
                    Please click below if you find our policy acceptable. If you want to talk, we
                    are available at{' '}
                    <a href="mailto:hello@tinkerhub.org" className="link" target="__blank">
                        hello@tinkerhub.org
                    </a>{' '}
                </small>
            </div>
            <TextField name="accept" type="checkbox" label="I Accept" ref={register} required />
        </>
    );
};
