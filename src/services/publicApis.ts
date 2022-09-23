import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SigninUser, SignupUser } from "../models/User";

const PublicApis = createApi({
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
    })
})

export default PublicApis;

export const {useSigninMutation, useSignupMutation} = PublicApis;