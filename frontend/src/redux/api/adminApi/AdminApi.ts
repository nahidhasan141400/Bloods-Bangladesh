import { api } from "../api";

export const adminApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (data) => {
        return {
          url: "/admin/login",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["admin"],
    }),

    getAdmin: builder.query({
      query: () => {
        return {
          url: "/admin/verify",
          method: "GET",
        };
      },
      providesTags: ["admin"],
    }),
  }),
});

export const { useGetAdminQuery, useLoginAdminMutation } = adminApi;
