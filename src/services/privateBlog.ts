import { Blog, CreateBlog, UpdateBlog } from "../models/Blog";
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
        updateBlog: builder.mutation<void, UpdateBlog>({
            query:({id, ...rest}) => ({
                url:`/blogs/${id}`,
                method:'PATCH',
                body: {...rest}
            }),
            invalidatesTags: ['PrivateBlog'],
        }),
        getAllBlog: builder.query<Blog[], string>({
            query:(path) => ({
                url:`/blogs?path=${path}`,
                method:'GET',
            }),
            providesTags: ['PrivateBlog'],
          }),
        deleteBlog: builder.mutation<void, number>({
            query:(id) => ({
                url:`/blogs/${id}`,
                method:'DELETE',
            }),
            invalidatesTags: ['PrivateBlog'],
        })
    }),
    overrideExisting: false
})

export default PrivateBlog;

export const {useCreateBlogMutation, useUpdateBlogMutation, useGetAllBlogQuery, useDeleteBlogMutation } = PrivateBlog;