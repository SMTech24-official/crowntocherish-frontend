/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all pet
    createPayment: build.mutation({
      query: (payload: any) => {
        return {
          url: `/create-payment-intent`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["payment", "chatroom"],
    }),
    getPayment: build.query({
      query: () => {
        return {
          url: `/create-payment-intent`,
          method: "GET",
        };
      },
      providesTags: ["payment", "chatroom"],
    }),
  }),
});
export const { useCreatePaymentMutation,useGetPaymentQuery } = paymentApi;
