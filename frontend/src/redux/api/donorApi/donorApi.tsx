/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../api";

const donorApi = api.injectEndpoints({
  endpoints: (builder) => ({
    CerateDonar: builder.mutation({
      query: (data) => {
        return {
          url: "/donor/create",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),
    SearchDonar: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: "/donor/search",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),

    GetDonorById: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: "/donor/get-by-id",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),

    AddDonorByAdmin: builder.mutation<any, any>({
      query: (data) => {
        return {
          url: "/donor/add-donor-by-admin",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),

    GetDonorByAdmin: builder.query<any, any>({
      query: () => {
        return {
          url: "/donor/get-all-by-admin",
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),

    GetNearBy: builder.query<
      any,
      {
        latitude: string;
        longitude: string;
        distance: string;
      }
    >({
      query: (data) => {
        return {
          url: `/donor/get-near-by?latitude=${data.latitude}&longitude=${data.longitude}&distance=${data.distance}`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
  }),
});

export const {
  useCerateDonarMutation,
  useSearchDonarMutation,
  useGetDonorByIdMutation,
  useGetNearByQuery,
  useGetDonorByAdminQuery,
  useAddDonorByAdminMutation,
} = donorApi;
