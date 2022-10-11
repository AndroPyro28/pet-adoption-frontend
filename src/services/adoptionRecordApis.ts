import { AdoptionRequest, AdoptionRecord, AdoptionUpdate } from "../models/Adoption.ts";
import { baseApi } from "./baseApi";

const AdoptionRecordApis = baseApi.injectEndpoints({
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

        deleteAdoptionRequest: builder.mutation<void, number>({
            query: (id) => ({
                url:`/adoption/${id}`,
                method:'DELETE',
            }),
            invalidatesTags:['adoption']
        }),
    }),
    overrideExisting: false
})

export default AdoptionRecordApis;

export const { useCreateAdoptionRequestMutation, useGetAllAdoptionRequestQuery, useUpdateAdoptionRequestMutation } = AdoptionRecordApis;