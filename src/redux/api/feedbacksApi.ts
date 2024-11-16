import { baseApi } from "./baseApi";

const feedBacksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all blogs
    getAllFeedbacks: build.query({
      query: () => {
        return {
          url: `/feedbacks`,
          method: "GET",
        };
      },
      providesTags: ["feedbacks"],
    }),
    getPublishedFeedback: build.query({
      query: (id) => {
        return {
          url: `/feedbacks/${id}`,
          method: "GET",
        };
      },
      providesTags: ["feedbacks"],
    }),
    updateFeedbackStatus: build.mutation({
      query: (id: string) => {
        // console.log(id);
        return {
          url: `/feedbacks`, // Adjust the URL if needed
          method: "PATCH",
          body: { id: id }, // Send the ID in the request body
        };
      },
      invalidatesTags: ["feedbacks"],
    }),
    deleteFeedbackStatus: build.mutation({
      query: (id: string) => {
        // console.log(id);
        return {
          url: `/feedbacks`, // Adjust the URL if needed
          method: "DELETE",
          body: { id: id }, // Send the ID in the request body
        };
      },
      invalidatesTags: ["feedbacks"],
    }),
    createFeedback: build.mutation({
      query: (newFeedback) => {
        // console.log(newFeedback); // Log the new feedback to the console
        return {
          url: `/feedbacks`, // Adjust the URL if needed
          method: "POST", // Use POST method for creating feedback
          body: newFeedback, // Send the new feedback object in the request body
        };
      },
      invalidatesTags: ["feedbacks"], // Invalidate the cache for feedbacks
    }),
    
  }),
});

export const { useGetAllFeedbacksQuery, useGetPublishedFeedbackQuery, useCreateFeedbackMutation, useUpdateFeedbackStatusMutation, useDeleteFeedbackStatusMutation } = feedBacksApi;
