import { Feedback, FeedbackReviews } from "../models/Feedback";
import { baseApi } from "./baseApi";

const FeedbackApis = baseApi.injectEndpoints({
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
    }),
    overrideExisting: false
})

export default FeedbackApis;

export const { useCreateFeedbackMutation, useGetFirstThreePinnedFeedbackQuery, useGetAllFeedbackQuery, useTogglePinFeedbackMutation, useDeleteFeedbackMutation } = FeedbackApis;