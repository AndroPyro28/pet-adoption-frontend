import { Stats } from "../models/Stats";
import { UpdateUser, User } from "../models/User";
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
            transformResponse: (response: User[]) => response.sort((a, b) =>  b.id! - a.id!),
            providesTags: ["User"],
        }),
        getUsersData: builder.query<Stats[], void>({
            query:() => ({
                url:'/auth/users/stats',
                method:'GET',
            }),
            providesTags: ["User"],
        }),
        getAllUsersWithSearch: builder.query<User[], string>({
            query:(search="") => ({
                url:`/auth/users?search=${search}`,
                method:'GET',
            }),
            transformResponse: (response: User[]) => response.sort((a, b) =>  b.id! - a.id!),
            providesTags:['User']
        }),
        updateUser: builder.mutation<void, UpdateUser>({
            query:(body) => ({
                url:`/auth/me/update`,
                method:'PATCH',
                body
            }),
            invalidatesTags:['User']
        }),
    }),
    overrideExisting: false

})

export default AuthApis;

export const { useAuthMeQuery, useGetAllUsersQuery, useGetUsersDataQuery, useGetAllUsersWithSearchQuery, useUpdateUserMutation } = AuthApis;