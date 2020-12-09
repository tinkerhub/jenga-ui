import { request } from 'config/request';

export interface GetSkillsListReturn {
    id: string;
    name: string;
}

const getSkillsListAPI = {
    url: '/skills',
    fetcher: async (url: string): Promise<GetSkillsListReturn[]> => {
        const { data, error } = await request<GetSkillsListReturn[]>({
            method: 'GET',
            url,
        });

        if (error && !data) {
            throw new Error(error.response?.data?.message);
        }

        return data as GetSkillsListReturn[];
    },
};

export default getSkillsListAPI;
