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
  }),
});

export const { useCerateDonarMutation, useSearchDonarMutation } = donorApi;
