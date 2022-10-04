import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Recovery } from "../models/ResetPassword";
import { SigninUser, SignupUser } from "../models/User";

const PublicApis = createApi({
    reducerPath:`publicAuth`,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_DEV_URL,
    }),
    tagTypes:['SignupUser', 'SigninUser'],
    endpoints: (builder) => ({
        signup: builder.mutation<void, SignupUser>({
            query: user => ({
                url:'/auth/signup',
                method:'POST',
                body: user,
            }),
            invalidatesTags: ["SignupUser"],
        }),
        signin: builder.mutation<void, SigninUser>({
            query: user => ({
                url:'/auth/signin',
                method:'POST',
                body: user,
            }),
            invalidatesTags:['SigninUser']
        }),
        findAccount: builder.mutation<void, string>({
            query: search => ({
                url:'/auth/forgot-password',
                method:'POST',
                body: {search},
            }),
        }),
        sendCode: builder.mutation<void, Recovery>({
            query: recovery => ({
                url:'/auth/congirm-reset-code',
                method:'POST',
                body: recovery,
            }),
        }),
    })
})

export default PublicApis;

export const {useSigninMutation, useSignupMutation, useFindAccountMutation, useSendCodeMutation} = PublicApis;