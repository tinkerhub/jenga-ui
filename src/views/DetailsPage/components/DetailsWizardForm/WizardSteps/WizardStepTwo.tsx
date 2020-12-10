/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { renderFormData } from 'components/utils';
import { wizardStepTwoFormFields } from './formFields';
import { useFetch } from 'hooks/useFetch';
import { getCollegeListAPI, GetCollegeListReturn } from 'api';
import { Select, TextField } from 'components';

export const WizardStepTwo: React.FC = () => {
    const { register, control, watch } = useFormContext();
    const { collegeList } = wizardStepTwoFormFields;

    const watchIsStudent = watch(wizardStepTwoFormFields.isStudent.name, '');
    const isStudent = watchIsStudent?.valueAndLabel === 'Student';
    const isMentor = watchIsStudent?.valueAndLabel === 'Professional';

    const watchHasCampusCommunity = watch(
        wizardStepTwoFormFields.heardAboutCampusCommunity.name,
        ''
    );

    const hasCampusCommunity =
        watchHasCampusCommunity?.label === 'Yes, there is an active community';

    const { data: collegeFetchedList } = useFetch<GetCollegeListReturn[]>(
        [getCollegeListAPI.url],
        getCollegeListAPI.fetcher
    );

    return (
        <>
            {renderFormData(wizardStepTwoFormFields.isStudent, 'student', register, control)}
            {isStudent ? (
                <>
                    {renderFormData(
                        wizardStepTwoFormFields.heardAboutCampusCommunity,
                        'campusCommunity',
                        register,
                        control
                    )}
                    {hasCampusCommunity ? (
                        <Select
                            control={control}
                            name={collegeList.name}
                            label={collegeList.label}
                            options={collegeFetchedList}
                            optionLabel={collegeList.optionLabel}
                            optionValue={collegeList.optionValue}
                        />
                    ) : (
                        <TextField
                            name="FreshCollege"
                            ref={register}
                            fullWidth
                            label="I currently study at"
                            helperText="Preferred format: College Name, Place, District"
                        />
                    )}
                    {wizardStepTwoFormFields.studentDetails.map((el, key) =>
                        renderFormData(el, key, register, control)
                    )}
                </>
            ) : null}
            {isMentor
                ? renderFormData(wizardStepTwoFormFields.canBeMentor, 'mentor', register, control)
                : null}
        </>
    );
};
