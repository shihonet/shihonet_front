import axios from 'axios';
import aspida from '@aspida/axios';
import createAspidaApiClient from '@/api/$api';

const applyAspida = () => aspida(axios);
export const api = createAspidaApiClient(applyAspida());


export const getBlogs = () => {
    try {
        const res = api.api.blogs.$get({
            body: {
                page: 1,
                limit: 10
            }
        });
        console.log('Response:', res); // resを出力

        return {res, error: null};
    } catch (e) {
        return {res: null, error: e};
    }
};
