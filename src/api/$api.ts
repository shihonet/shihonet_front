import type { AspidaClient } from 'aspida';
import type { Methods as Methods_dlvvmz } from './blogs';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/blogs';
  const GET = 'GET';

  return {
    blogs: {
      get: (option: { body: Methods_dlvvmz['get']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_dlvvmz['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option: { body: Methods_dlvvmz['get']['reqBody'], config?: T | undefined }) =>
        fetch<Methods_dlvvmz['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
