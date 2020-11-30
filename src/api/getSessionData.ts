import { request } from 'config/request';

interface GetSessionDataAPIReturn {
    number?: string;
    memberShipID?: string;
}

const getSessionData = async (): Promise<GetSessionDataAPIReturn> => {
    const { data, error } = await request<GetSessionDataAPIReturn>({
        method: 'GET',
        url: '/auth',
    });

    if (error && !data) {
        throw new Error(error.message);
    }

    return data as GetSessionDataAPIReturn;
};

export default getSessionData;
