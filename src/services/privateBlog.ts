import { CreateBlog } from "../models/Blog";
import {baseApi} from "./Apis";

const PrivateBlog = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createBlog: builder.mutation<void, CreateBlog>({
            query:(body) => ({
                url:'/blogs',
                method:'POST',
                body
            }),
            invalidatesTags: ['PrivateBlog'],
        }),
    }),
    overrideExisting: false
})

export default PrivateBlog;

export const {useCreateBlogMutation} = PrivateBlog;