/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { renderFormData } from 'components/utils';
import { wizardStepTwoFormFields } from './formFields';
import { useFetch } from 'hooks/useFetch';
import { getCollegeListAPI, GetCollegeListReturn } from 'api';
import { Select, TextField } from 'components';

const WizardStepTwo: React.FC = () => {
    const { register, control, watch } = useFormContext();
    const { collegeList } = wizardStepTwoFormFields;

    const watchIsStudent = watch(wizardStepTwoFormFields.isStudent.name, '') === 'Student';
    const hasCampusCommunity =
        watch(wizardStepTwoFormFields.heardAboutCampusCommunity.name, '') ===
        'Yes, there is an active community';

    const { data: collegeFetchedList } = useFetch<GetCollegeListReturn[]>(
        [getCollegeListAPI.url],
        getCollegeListAPI.fetcher
    );

    return (
        <>
            {renderFormData(wizardStepTwoFormFields.isStudent, 'student', register, control)}
            {watchIsStudent ? (
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
                            label="I currently study at"
                            helperText="Preferred format: College Name, Place, District"
                        />
                    )}
                    {wizardStepTwoFormFields.studentDetails.map((el, key) =>
                        renderFormData(el, key, register, control)
                    )}
                </>
            ) : (
                renderFormData(wizardStepTwoFormFields.canBeMentor, 'mentor', register, control)
            )}
        </>
    );
};

export default WizardStepTwo;
