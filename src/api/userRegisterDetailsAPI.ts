import { request } from 'config/request';

interface RegisterMemberDetailsReturn {
    message: string;
    memberShipID: string;
}

export interface RegisterMemberDetailsArgument {
    MobileNumber: string;
    FullName: string;
    NickName: string;
    DOB: string;
    Email: string;
    Pronoun: string;
    CampusCommunityActive: string;
    College: string;
    StudyStream: string;
    GraduationDate: string;
    Reason: string;
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
