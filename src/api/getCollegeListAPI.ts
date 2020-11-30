import { request } from 'config/request';

interface GetCollegeListReturn {
    id: string;
    name: string;
}

const getCollegeListAPI = async (): Promise<GetCollegeListReturn[]> => {
    const { data, error } = await request<GetCollegeListReturn[]>({
        method: 'GET',
        url: '/colleges',
    });

    if (error && !data) {
        throw new Error(error.response?.data?.message);
    }

    return data as GetCollegeListReturn[];
};

export default getCollegeListAPI;
