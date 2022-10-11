import { User } from "../models/User";
import { baseApi } from "./baseApi";

const AuthApis = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        authMe: builder.query<User, void>({
            query:() => ({
                url:'/auth/me',
                method:'GET',
            }),
            providesTags: ['User'],
        }),
        getAllUsers: builder.query<User[], void>({
            query:() => ({
                url:'/auth/users',
                method:'GET',
            }),
            providesTags: ["User"],
        }),
    }),
    overrideExisting: false

})

export default AuthApis;

export const { useAuthMeQuery, useGetAllUsersQuery } = AuthApis;