/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // login
    login: build.mutation({
      query: (data: any) => {
        return {
          url: `/login`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    // register
    customerSignUp: build.mutation({
      query: (data: any) => {
        return {
          url: `/customer-registration`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),
    // register
    garageServiceProviderSignUp: build.mutation({
      query: (data: any) => {
        console.log({data});
        return {
          url: `/service-provider-registration`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    // // forgotten profile
    // forgottenPassword: build.mutation({
    //   query: (data: any) => ({
    //     url: `/auth/forgot-password`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["Auth"],
    // }),
    // // reset password profile
    // resetPassword: build.mutation({
    //   query: (data: any) => ({
    //     url: `/auth/reset-password`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["Auth"],
    // }),
    // // get me
    // getMyProfile: build.query({
    //   query: () => ({
    //     url: `/auth/get-me`,
    //     method: "GET",
    //   }),
    //   providesTags: ["Auth"],
    // }),

    // // change password
    // changePassword: build.mutation({
    //   query: (data: any) => ({
    //     url: `/auth/change-password`,
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["Auth"],
    // }),
  }),
});

export const {
  useLoginMutation,
  useCustomerSignUpMutation,
  useGarageServiceProviderSignUpMutation
  // useRegisterMutation,
  // useForgottenPasswordMutation,
  // useChangePasswordMutation,
  // useGetMyProfileQuery, useResetPasswordMutation
} = authApi;