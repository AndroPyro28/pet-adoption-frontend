import { Blog } from "../models/Blog";
import { publicApi } from "./Apis";

const PublicBlog = publicApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlog: builder.query<Blog[], string>({
      query:(path) => ({
          url:`/blogs?path=${path}`,
          method:'GET',
      }),
      providesTags: ['PublicBlog'],
    })
  }),
  overrideExisting: false,
});

export default PublicBlog;

export const {useGetAllBlogQuery} = PublicBlog;
