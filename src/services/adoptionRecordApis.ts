import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { Pet } from "../models/Pet";
import { AdoptionRequest } from "../models/Request";

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
            query:(data) => ({
                url:'/adoption',
                method:'POST',
                body:data
            }),
            invalidatesTags:['adoption']
        }),
        getAllAdoptionRequest: builder.query<AdoptionRequest[], void>({
            query:(data) => ({
                url:'/adoption',
                method:'POST',
                body:data
            }),
            providesTags:['adoption']
        }),
    })
})

export default AdoptionRecordApis;

export const { useCreateAdoptionRequestMutation } = AdoptionRecordApis;