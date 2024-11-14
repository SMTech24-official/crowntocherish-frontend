import { baseApi } from "./baseApi";

const subscriberApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all blogs
    getAllSubscriber: build.query({
      query: () => {
        return {
          url: `/subscriber`,
          method: "GET",
        };
      },
      providesTags: ["subscriber"],
    }),
    createSubscriber: build.mutation({
      query: (newSubscriber) => {
        return {
          url: `/subscriber`, // Adjust the URL if needed
          method: "POST", // Use POST method for creating feedback
          body: newSubscriber, // Send the new feedback object in the request body
        };
      },
      invalidatesTags: ["subscriber"], // Invalidate the cache for Subscriber
    }),
  }),
});

export const { useGetAllSubscriberQuery, useCreateSubscriberMutation } =
  subscriberApi;
