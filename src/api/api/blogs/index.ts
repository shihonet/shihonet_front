import type { DefineMethods } from 'aspida';
import { blogsRequests } from '@/types/requests';
import { blogsResponses } from '@/types/responses';

export type Methods = DefineMethods<{
    get: {
        reqBody: blogsRequests;
        resBody: blogsResponses;
    };
}>;
