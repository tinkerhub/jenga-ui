import { request } from 'config/request';

interface RegisterMemberDetailsReturn {
    message: string;
    memberShipID: string;
    token: string;
}

export interface RegisterMemberDetailsArgument {
    MobileNumber: string;
    FullName: string;
    DOB: string;
    Email: string;
    Pronoun?: string;
    CampusCommunityActive?: string;
    FreshCollege?: string;
    College?: string;
    StudyStream?: string;
    GraduationDate?: string;
    My_Skills?: string;
    House_Name?: string;
    Street?: string;
    District?: string;
    Pincode?: string;
    Mentor?: boolean;
    RegistrationType: string;
}

const userRegisterDetailsAPI = async (
    data: RegisterMemberDetailsArgument
): Promise<RegisterMemberDetailsReturn> => {
    const { data: res, error } = await request<RegisterMemberDetailsReturn>({
        method: 'POST',
        url: '/details',
        data,
    });

    if (error && !data) {
        throw new Error(error.message);
    }

    return res as RegisterMemberDetailsReturn;
};

export default userRegisterDetailsAPI;
