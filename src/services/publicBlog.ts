import { Blog } from "../models/Blog";
import { publicApi } from "./Apis";

const PublicBlog = publicApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlog: builder.query<Blog[], string>({
      query:(path) => ({
          url:`/blogs?path=${path}`,
          method:'GET',
      }),
      transformResponse: (response: Blog[]) => response.sort((a, b) =>  b.id! - a.id!),
      providesTags: ['PublicBlog', 'PrivateBlog'],
    })
  }),
  overrideExisting: false,
});

export default PublicBlog;

export const {useGetAllBlogQuery} = PublicBlog;
