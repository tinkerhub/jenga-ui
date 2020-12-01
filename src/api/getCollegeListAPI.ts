import { request } from 'config/request';

export interface GetCollegeListReturn {
    id: string;
    name: string;
}

const getCollegeListAPI = {
    url: '/colleges',
    fetcher: async (url: string): Promise<GetCollegeListReturn[]> => {
        const { data, error } = await request<GetCollegeListReturn[]>({
            method: 'GET',
            url,
        });

        if (error && !data) {
            throw new Error(error.response?.data?.message);
        }

        return data as GetCollegeListReturn[];
    },
};

export default getCollegeListAPI;
