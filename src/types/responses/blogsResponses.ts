import {paginationResponses} from "@/types/responses/pagination";

export interface blogsResponses {
    blogs: [
        title: string,
        member_name: string,
        published_at: string,
        url_path: string,
    ]
    pagination: paginationResponses
}
