import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const baseApi = createApi({
  reducerPath: `baseApi`,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_DEV_URL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${Cookies.get("userToken")!}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["adoption", "Pet", "User", "Feedback", "SignupUser", "SigninUser", "PrivateBlog"],
});

export const passwordResetApi = createApi({
  reducerPath: `passwordResetApi`,
    baseQuery: fetchBaseQuery({
      baseUrl: process.env.REACT_APP_DEV_URL,
      prepareHeaders: (headers) => {
        headers.set("Authorization", `Bearer ${Cookies.get("resetToken")!}`);
        return headers;
      },
    }),
    endpoints: () => ({}),
    tagTypes: ["User",],
  });

  export const publicApi = createApi({
    reducerPath: `publicApi`,
    baseQuery: fetchBaseQuery({
      baseUrl: process.env.REACT_APP_DEV_URL,
    }),
    endpoints: () => ({}),
    tagTypes: ["SignupUser", "SigninUser", "PublicBlog", "PrivateBlog"],
  });
