/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

const wishlistApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all pet
    getWishlist: build.query({
      query: () => ({
        url: `/wishlist`,
        method: "GET",
      }),
      providesTags: ["Wishlist"],
    }),
    getWishlistByProduct: build.query({
      query: (id) => ({
        url: `/wishlist/${id}`,
        method: "GET",
      }),
      providesTags: ["Wishlist"],
    }),
    // get all pet
    toggleWishlist: build.mutation({
      query: (payload: any) => {
      
        return {
          url: `/wishlist`,
          method: "POST",
          body: { productId: payload },
        };
      },
      invalidatesTags: ["Wishlist"],
    }),
    deleteWishlist: build.mutation({
      query: (payload: any) => {
       
        return {
          url: `/wishlist`,
          method: "DELETE",
          body: { productId: payload },
        };
      },
      invalidatesTags: ["Wishlist"],
    }),
  }),
});

export const {
  useGetWishlistQuery,
  useToggleWishlistMutation,
  useDeleteWishlistMutation,
  useGetWishlistByProductQuery
} = wishlistApi;
