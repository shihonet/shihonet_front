import type { AspidaClient } from 'aspida';
import type { Methods as Methods_14n3zk0 } from './api/blogs';

const defaultBaseURL = 'http://localhost:3001';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = defaultBaseURL;
  const PATH0 = '/api/blogs';
  const GET = 'GET';

  return {
    api: {
      blogs: {
        get: (option: { body: Methods_14n3zk0['get']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_14n3zk0['get']['resBody']>(prefix, PATH0, GET, option).json(),
        $get: (option: { body: Methods_14n3zk0['get']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_14n3zk0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH0}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
