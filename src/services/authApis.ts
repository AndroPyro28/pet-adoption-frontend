import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { User } from "../models/User";

const AuthApis = createApi({
    reducerPath:`privateAuth`,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_DEV_URL,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${Cookies.get('userToken')!}`);
            return headers;
        }
    }),
    tagTypes:['User'],
    endpoints: (builder) => ({
        authMe: builder.query<User, void>({
            query:() => ({
                url:'/auth/me',
                method:'GET',
            }),
            providesTags: ["User"],
        }),
        getAllUsers: builder.query<User[], void>({
            query:() => ({
                url:'/auth/users',
                method:'GET',
            }),
            providesTags: ["User"],
        }),
    })
})

export default AuthApis;

export const { useAuthMeQuery, useGetAllUsersQuery } = AuthApis;