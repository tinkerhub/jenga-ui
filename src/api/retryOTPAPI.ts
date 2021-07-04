import { request } from 'config/request';

interface RetryOTPReturn {
    success: number;
}

const retryOTPAPI = async (retry_type: 'voice' | 'text'): Promise<RetryOTPReturn> => {
    const { data, error } = await request<RetryOTPReturn>({
        method: 'POST',
        url: '/retry',
        data: { retry_type },
    });

    if (error && !data) {
        throw new Error(error.message);
    }

    return data as RetryOTPReturn;
};

export default retryOTPAPI;
