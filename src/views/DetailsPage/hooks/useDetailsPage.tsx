import { useState } from 'react';
import { useRouter } from 'next/router';
import { getCollegeListAPI, userRegisterDetailsAPI, GetCollegeListReturn } from 'api';
import { useForm, UseFormMethods } from 'react-hook-form';
import { useAuth } from 'context/AuthContext';
import { useFetch } from 'hooks/useFetch';

interface OptionType1 {
    valueAndLabel: string;
}
interface OptionType2 {
    value: string;
    label: string;
}

interface submitRegistrationDetails {
    MobileNumber: string;
    FullName: string;
    NickName: string;
    DOB: Date;
    Email: string;
    Pronoun: OptionType1;
    CampusCommunityActive: OptionType2;
    College: GetCollegeListReturn;
    StudyStream: OptionType1;
    GraduationDate: OptionType1;
    Reason: string;
    accept: boolean;
}

type submitRegistrationDetailsSubmission = (arg: submitRegistrationDetails) => Promise<void>;

type useDetailsPageReturn = {
    userRegisterError: string | null;
    handleSubmit: HTMLFormElement['submit'];
    register: UseFormMethods['register'];
    errors: UseFormMethods['errors'];
    isSubmitting: boolean;
    collegeList: GetCollegeListReturn[] | undefined;
    control: UseFormMethods['control'];
    verified?: boolean;
};

export const useDetailsPage = (): useDetailsPageReturn => {
    const [userRegisterError, setuserRegisterError] = useState(null);
    const router = useRouter();
    const { setSessionData, number, verified } = useAuth();
    const { data: collegeList } = useFetch<GetCollegeListReturn[]>(
        [getCollegeListAPI.url],
        getCollegeListAPI.fetcher
    );

    const {
        register,
        errors,
        handleSubmit,
        control,
        formState: { isSubmitting },
    } = useForm<submitRegistrationDetails>({
        defaultValues: {
            MobileNumber: number,
        },
    });

    const submitRegistrationDetails: submitRegistrationDetailsSubmission = async (preFormData) => {
        try {
            const formData = {
                ...preFormData,
                accept: undefined,
                DOB: `${preFormData.DOB.getFullYear()}-${
                    preFormData.DOB.getMonth() + 1
                }-${preFormData.DOB.getDate()}`,
                MobileNumber: number as string,
                Pronoun: preFormData.Pronoun.valueAndLabel,
                CampusCommunityActive: preFormData.CampusCommunityActive.value,
                College: preFormData.College.id,
                StudyStream: preFormData.StudyStream.valueAndLabel,
                GraduationDate: preFormData.GraduationDate.valueAndLabel,
            };
            const { memberShipID } = await userRegisterDetailsAPI(formData);

            setSessionData({ memberShipID });
            router.push('/done');
        } catch (error) {
            setuserRegisterError(error.message);
        }
    };

    return {
        userRegisterError,
        handleSubmit: handleSubmit(submitRegistrationDetails),
        errors,
        register,
        isSubmitting,
        collegeList,
        control,
        verified,
    };
};
