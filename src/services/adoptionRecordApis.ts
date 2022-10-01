import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { AdoptionRequest, AdoptionRecord, AdoptionUpdate } from "../models/Adoption.ts";

const AdoptionRecordApis = createApi({
    reducerPath: `adoption`,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_DEV_URL,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${Cookies.get('userToken')!}`);
            return headers;
        }
    }),
    tagTypes:['adoption'],
    endpoints: (builder) => ({
        createAdoptionRequest: builder.mutation<void, AdoptionRequest>({
            query: data => ({
                url:'/adoption',
                method:'POST',
                body:data
            }),
            invalidatesTags:['adoption']
        }),
        getAllAdoptionRequest: builder.query<AdoptionRecord[], void>({
            query:() => ({
                url:'/adoption',
                method:'GET',
            }),
            providesTags:['adoption']
        }),
        updateAdoptionRequest: builder.mutation<void, {data:AdoptionUpdate, id: number}>({
            query: ({data, id}) => ({
                url:`/adoption/${id}`,
                method:'PATCH',
                body: data
            }),
            invalidatesTags:['adoption']
        }),
    })
})

export default AdoptionRecordApis;

export const { useCreateAdoptionRequestMutation, useGetAllAdoptionRequestQuery, useUpdateAdoptionRequestMutation } = AdoptionRecordApis;