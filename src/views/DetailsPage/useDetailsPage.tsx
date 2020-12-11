import { useState } from 'react';
import { useRouter } from 'next/router';
import { userRegisterDetailsAPI, GetCollegeListReturn, GetSkillsListReturn } from 'api';
import { useAuth } from 'context/AuthContext';
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
    DOB: Date;
    Email: string;
    Pronoun?: OptionType1;
    CampusCommunityActive?: OptionType2;
    College?: GetCollegeListReturn;
    StudyStream?: OptionType1;
    GraduationDate?: OptionType1;
    accept?: boolean;
    My_Skills?: GetSkillsListReturn[];
    House_Name?: string;
    Street?: string;
    District?: OptionType1;
    Pincode?: string;
    Mentor?: OptionType2;
    RegistrationType: OptionType1;
    FreshCollege?: string;
}

type submitRegistrationDetailsSubmission = (arg: submitRegistrationDetails) => Promise<void>;

type useDetailsPageReturn = {
    userRegisterError: string | null;
    submitRegistrationDetails: submitRegistrationDetailsSubmission;
    verified?: boolean;
    number?: string;
};

export const useDetailsPage = (): useDetailsPageReturn => {
    const [userRegisterError, setuserRegisterError] = useState(null);

    const router = useRouter();

    const { setSessionData, number, verified } = useAuth();

    const submitRegistrationDetails: submitRegistrationDetailsSubmission = async (preFormData) => {
        const {
            Pronoun,
            CampusCommunityActive,
            College,
            StudyStream,
            GraduationDate,
            DOB,
            District,
            Mentor,
            RegistrationType,
        } = preFormData;
        try {
            /**
             * Formating my_skills from array of objects -> comma seperated string of id
             * eg [{id:'#1',name:"hello"},{id:'#2',name:"hellov2"}] -> '#1,#2'
             */
            const My_Skills = preFormData?.My_Skills?.map((el) => el.id).join(',');

            const formData = {
                ...preFormData,
                accept: undefined,
                DOB: `${DOB.getFullYear()}-${DOB.getMonth() + 1}-${DOB.getDate()}`,
                MobileNumber: number as string,
                Pronoun: Pronoun?.valueAndLabel,
                CampusCommunityActive: CampusCommunityActive?.value,
                College: College?.id,
                StudyStream: StudyStream?.valueAndLabel,
                GraduationDate: GraduationDate?.valueAndLabel,
                District: District?.valueAndLabel,
                Mentor: Boolean(Mentor?.value),
                RegistrationType: RegistrationType?.valueAndLabel,
                My_Skills,
            };
            const { memberShipID, token } = await userRegisterDetailsAPI(formData);

            setSessionData({ memberShipID, token });
            router.push('/done');
        } catch (error) {
            setuserRegisterError(error.message);
        }
    };

    return {
        userRegisterError,
        submitRegistrationDetails,
        verified,
        number,
    };
};
