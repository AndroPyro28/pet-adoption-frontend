import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import { Feedback, FeedbackReviews } from "../models/Feedback";

const FeedbackApis = createApi({
    reducerPath: `feedback`,
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_DEV_URL,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${Cookies.get('userToken')!}`);
            return headers;
        }
    }),
    tagTypes:['Feedback'],
    endpoints: (builder) => ({
        createFeedback: builder.mutation<void, Feedback>({
            query: (feedback) => ({
                url:`/feedback`,
                method:'POST',
                body: feedback
            }),
            invalidatesTags:['Feedback']
        }),
        getAllFeedback: builder.query<FeedbackReviews[], void>({
            query: () => ({
                url:`/feedback`,
                method:'GET',
            }),
            providesTags: ['Feedback']
        }),
        togglePinFeedback: builder.mutation<void, number>({
            query: (id) => ({
                url:`/feedback/${id}`,
                method:'PATCH',
            }),
            invalidatesTags: ['Feedback']
        }),
        deleteFeedback: builder.mutation<void, number>({
            query: (id) => ({
                url:`/feedback/${id}`,
                method:'DELETE',
            }),
            invalidatesTags: ['Feedback']
        }),
        getFirstThreePinnedFeedback: builder.query<FeedbackReviews[], void>({
            query: () => ({
                url:`/feedback/pinned`,
                method:'GET',
            }),
            providesTags: ['Feedback']
        }),
    })
})

export default FeedbackApis;

export const { useCreateFeedbackMutation, useGetFirstThreePinnedFeedbackQuery, useGetAllFeedbackQuery, useTogglePinFeedbackMutation, useDeleteFeedbackMutation } = FeedbackApis;