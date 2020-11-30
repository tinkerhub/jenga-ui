import { request } from 'config/request';

const clearSession = async (): Promise<void> => {
    const { data, error } = await request({
        method: 'GET',
        url: '/logout',
    });

    if (error && !data) {
        throw new Error(error.response?.data);
    }
};

export default clearSession;
