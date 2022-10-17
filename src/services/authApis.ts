import { Stats } from "../models/Stats";
import { User } from "../models/User";
import { baseApi } from "./Apis";

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
        getUsersData: builder.query<Stats[], void>({
            query:() => ({
                url:'/auth/users/stats',
                method:'GET',
            }),
            providesTags: ["User"],
        }),
    }),
    overrideExisting: false

})

export default AuthApis;

export const { useAuthMeQuery, useGetAllUsersQuery, useGetUsersDataQuery } = AuthApis;