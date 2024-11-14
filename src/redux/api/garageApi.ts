/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all products
    getAllGarages: build.query({
      query: () => {
        return {
          url: `/garages-list`,
          method: "GET",
        };
      },
      
      providesTags: ["Garages"],
    }),

    // get single products
    getSingleGarage: build.query({
      query: (id) => ({
        url: `/garages-details/${id}`,
        method: "GET",
      }),
      providesTags: ["Garages"],
    }),

    // get all products
    getNearestGarages: build.query({
      query: (params) => {
        const queryString = new URLSearchParams(params).toString();
        return {
          url: `/nearest-garages?${queryString}`,
          method: "GET",
        };
      },
      providesTags: ["Garages"],
    }),

    getFilterGarages: build.query({
      query: (params) => {
        return {
          url: `/garages-details-keywords/${params}`,
          method: "GET",
        };
      },
      providesTags: ["Garages"],
    }),
  }),
});



export const {
  useGetAllGaragesQuery,
  useGetNearestGaragesQuery,
  useGetFilterGaragesQuery,
  useGetSingleGarageQuery,
} = productsApi;
