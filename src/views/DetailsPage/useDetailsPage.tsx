import { useState } from 'react';
import { useRouter } from 'next/router';
import { userRegisterDetailsAPI, GetCollegeListReturn, GetSkillsListReturn } from 'api';
import { useAuth } from 'context/AuthContext';
interface Options {
    value: string;
    label: string;
}

interface submitRegistrationDetails {
    MobileNumber: string;
    FullName: string;
    DOB: Date;
    Email: string;
    Pronoun?: Options;
    CampusCommunityActive?: Options;
    College?: GetCollegeListReturn;
    StudyStream?: Options;
    GraduationDate?: Options;
    accept?: boolean;
    My_Skills?: GetSkillsListReturn[];
    House_Name?: string;
    Street?: string;
    District?: Options;
    Pincode?: string;
    Mentor?: Options;
    RegistrationType: Options;
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
                Pronoun: Pronoun?.value,
                CampusCommunityActive: CampusCommunityActive?.value,
                College: College?.id,
                StudyStream: StudyStream?.value,
                GraduationDate: GraduationDate?.value,
                District: District?.value,
                Mentor: Boolean(Mentor?.value),
                RegistrationType: RegistrationType?.value,
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
