import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/ui/user" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => {
        return {
          url: "/registration",
          method: "POST",
          body: data,
        };
      },
    }),
    loginUser: builder.mutation({
      query: (data) => {
        return {
          url: "/login",
          method: "POST",
          body: data,
        };
      },
    }),
    emailVerification: builder.mutation({
      query: (data) => {
        return {
          url: "/otp",
          method: "POST",
          body: data,
        };
      },
    }),
    getUser: builder.query({
      query: () => {
        return {
          url: "/verify",
          method: "GET",
        };
      },
    })
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useEmailVerificationMutation,
  useGetUserQuery
} = authApi;
