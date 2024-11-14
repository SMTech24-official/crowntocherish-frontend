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
    updateFeedbackStatus: build.mutation({
      query: (id: string) => {
        console.log(id);
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
        console.log(id);
        return {
          url: `/feedbacks`, // Adjust the URL if needed
          method: "DELETE",
          body: { id: id }, // Send the ID in the request body
        };
      },
      invalidatesTags: ["feedbacks"],
    }),
  }),
});

export const { useGetAllFeedbacksQuery, useUpdateFeedbackStatusMutation, useDeleteFeedbackStatusMutation } = feedBacksApi;
