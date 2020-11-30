import { request } from 'config/request';

interface SentOTPAPIReturn {
    message: string;
}

const sendOTPAPI = async (number: string): Promise<SentOTPAPIReturn> => {
    const { data, error } = await request<SentOTPAPIReturn>({
        method: 'POST',
        url: '/',
        data: { number },
    });

    if (error && !data) {
        throw new Error(error.message);
    }

    return data as SentOTPAPIReturn;
};

export default sendOTPAPI;
