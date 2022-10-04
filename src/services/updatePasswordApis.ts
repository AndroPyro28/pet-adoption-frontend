import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import {UpdatePassword} from "../models/ResetPassword"
import { User } from "../models/User";

const UpdatePasswordApis = createApi({
    reducerPath:`updatePassword`,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_DEV_URL,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${Cookies.get('resetToken')!}`);
            return headers;
        }
    }),
    tagTypes:['User'],
    endpoints: (builder) => ({
        authUpdatePasswordPage: builder.query<User, void>({
            query: () => ({
                url:'/auth/me',
                method:'GET',
            }),
            providesTags: ["User"],
        }),
        updatePassword: builder.mutation<void, UpdatePassword>({
            query: body=> ({
                url:'/auth/update-password',
                method:'POST',
                body: body,
            }),
        }),
    })
})

export default UpdatePasswordApis;

export const {useUpdatePasswordMutation, useAuthUpdatePasswordPageQuery} = UpdatePasswordApis;