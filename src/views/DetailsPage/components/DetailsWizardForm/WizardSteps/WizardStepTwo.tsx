/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { renderFormData } from 'components/utils';
import { wizardStepTwoFormFields } from './formFields';
import { useFetch } from 'hooks/useFetch';
import { getCollegeListAPI, GetCollegeListReturn } from 'api';
import { Select, TextField } from 'components';

export const WizardStepTwo: React.FC = () => {
    const { register, control, watch, errors } = useFormContext();
    const {
        collegeList,
        canBeMentor,
        studentDetails,
        heardAboutCampusCommunity,
    } = wizardStepTwoFormFields;

    const watchIsStudent = watch(wizardStepTwoFormFields.isStudent.name, '');

    const isStudent = watchIsStudent?.value === 'Student';
    const isMentor = watchIsStudent?.value === 'Professional';

    const watchHasCampusCommunity = watch(heardAboutCampusCommunity.name, '');

    const hasCampusCommunity =
        watchHasCampusCommunity?.label === 'Yes, there is an active community';

    const { data: collegeFetchedList } = useFetch<GetCollegeListReturn[]>(
        [getCollegeListAPI.url],
        getCollegeListAPI.fetcher
    );

    return (
        <>
            {renderFormData(
                wizardStepTwoFormFields.isStudent,
                'student',
                register,
                control,
                errors?.[wizardStepTwoFormFields.isStudent.name]?.message
            )}
            {isStudent ? (
                <>
                    {renderFormData(
                        heardAboutCampusCommunity,
                        'campusCommunity',
                        register,
                        control,
                        errors?.[heardAboutCampusCommunity.name]?.message
                    )}
                    {hasCampusCommunity ? (
                        <Select
                            control={control}
                            name={collegeList.name}
                            label={collegeList.label}
                            options={collegeFetchedList}
                            optionLabel={collegeList.optionLabel}
                            optionValue={collegeList.optionValue}
                            helperText={errors?.[collegeList.name]?.message}
                            error={Boolean(errors?.[collegeList.name]?.message)}
                        />
                    ) : (
                        <TextField
                            name="FreshCollege"
                            ref={register}
                            fullWidth
                            label="I currently study at"
                            helperText={
                                errors?.FreshCollege?.message ||
                                'Preferred format: College Name, Place, District'
                            }
                            error={Boolean(errors?.FreshCollege?.message)}
                        />
                    )}
                    {studentDetails.map((el, key) =>
                        renderFormData(el, key, register, control, errors?.[el.name]?.message)
                    )}
                </>
            ) : null}
            {isMentor
                ? renderFormData(
                      canBeMentor,
                      'mentor',
                      register,
                      control,
                      errors?.[canBeMentor.name]?.message
                  )
                : null}
        </>
    );
};
