import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { Pet } from "../models/Pet";

const AnimalRecordApis = createApi({
    reducerPath: `pets`,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_DEV_URL,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${Cookies.get('userToken')!}`);
            return headers;
        }
    }),
    tagTypes:['Pet'],
    endpoints: (builder) => ({
        createRecord: builder.mutation<void, Pet>({
            query: pet => ({
                url:'/pets',
                method:'POST',
                body: pet,
            }),
            invalidatesTags:['Pet']
        }),
        getAllAnimalRecord: builder.query<Pet[], void>({
            query:() => ({
                url:'/pets',
                method:'GET',
            }),
            providesTags:['Pet']
        }),
    })
})

export default AnimalRecordApis;

export const { useCreateRecordMutation, useGetAllAnimalRecordQuery } = AnimalRecordApis;