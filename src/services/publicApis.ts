import { Recovery } from "../models/ResetPassword";
import { SigninUser, SignupUser } from "../models/User";
import {publicApi} from "./Apis"
const PublicApis = publicApi.injectEndpoints({
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
    }),
    overrideExisting: false

})

export default PublicApis;

export const {useSigninMutation, useSignupMutation, useFindAccountMutation, useSendCodeMutation} = PublicApis;