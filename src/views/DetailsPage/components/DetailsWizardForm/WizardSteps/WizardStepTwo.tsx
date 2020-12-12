/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { renderFormData } from 'components/utils';
import { wizardStepTwoFormFields } from './formFields';
import { useFetch } from 'hooks/useFetch';
import { getCollegeListAPI, GetCollegeListReturn } from 'api';
import { Select, TextField } from 'components';

export const WizardStepTwo: React.FC = () => {
    const { register, control, watch, errors, unregister, setValue } = useFormContext();
    const {
        collegeList,
        canBeMentor,
        studentDetails,
        heardAboutCampusCommunity,
        isStudent: isStudentFormField,
    } = wizardStepTwoFormFields;

    const watchIsStudent = watch(isStudentFormField.name, '');

    const isStudent = watchIsStudent?.value === 'Student';
    const isMentor = watchIsStudent?.value === 'Professional';

    const watchHasCampusCommunity = watch(heardAboutCampusCommunity.name, '');

    const hasCampusCommunity =
        watchHasCampusCommunity?.label === 'Yes, there is an active community';

    const { data: collegeFetchedList } = useFetch<GetCollegeListReturn[]>(
        [getCollegeListAPI.url],
        getCollegeListAPI.fetcher
    );

    const studentConditionalRenderingList = [
        canBeMentor.name,
        !hasCampusCommunity ? collegeList.name : 'FreshCollege',
    ];

    const mentorConditionalRenderingList = [
        collegeList.name,
        'FreshCollege',
        heardAboutCampusCommunity.name,
        ...studentDetails.map((el) => el.name),
    ];

    // remove conditional other ones
    useEffect(() => {
        if (isStudent) {
            unregister(studentConditionalRenderingList);
            studentConditionalRenderingList.forEach((el) => setValue(el, null));
        } else {
            mentorConditionalRenderingList.forEach((el) => setValue(el, null));
            unregister(mentorConditionalRenderingList);
            [canBeMentor.name].forEach((el) => register(el));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isStudent, hasCampusCommunity, unregister]);

    return (
        <>
            {renderFormData(
                wizardStepTwoFormFields.isStudent,
                'student',
                register,
                control,
                errors?.[isStudentFormField.name]?.message
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
