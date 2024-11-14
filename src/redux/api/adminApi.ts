/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    totalUser: build.query({
      query: (query) => {
          const params = new URLSearchParams();
          if (query) {
              query.forEach((item: any) => {
                  params.append(item.name, item.value as string);
              });
          }
          return {
              url: `total-users`,
              method: 'GET',
              params: params,
          };
      },
      providesTags: ['Users'],
  }),

    // // register
    // customerSignUp: build.mutation({
    //   query: (data: any) => {
    //     return {
    //       url: `/customer-registration`,
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    //   invalidatesTags: ["Auth"],
    // }),
    // // register
    // garageServiceProviderSignUp: build.mutation({
    //   query: (data: any) => {
    //     return {
    //       url: `/service-provider-registration`,
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    //   invalidatesTags: ["Auth"],
    // }),

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
  useTotalUserQuery,
  // useRegisterMutation,
  // useForgottenPasswordMutation,
  // useChangePasswordMutation,
  // useGetMyProfileQuery, useResetPasswordMutation
} = adminApi;
