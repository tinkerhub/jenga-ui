import { request } from 'config/request';

interface SentOTPAPIReturn {
    message: string;
    memberShipID?: string;
}

const validateOTPAPI = async (otp: string): Promise<SentOTPAPIReturn> => {
    const { data, error } = await request<SentOTPAPIReturn>({
        method: 'POST',
        url: '/validate',
        data: { otp },
    });

    if (error && !data) {
        const status = error.response?.status;
        if (status === 419) {
            return { memberShipID: error.response?.data?.memberShipID, message: 'exists' };
        }
    }

    return data as SentOTPAPIReturn;
};

export default validateOTPAPI;
