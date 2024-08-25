import { api } from "../api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => {
        return {
          url: "/user/registration",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),
    loginUser: builder.mutation({
      query: (data) => {
        return {
          url: "/user/login",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),
    emailVerification: builder.mutation({
      query: (data) => {
        return {
          url: "/user/otp",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["user"],
    }),
    getUser: builder.query({
      query: () => {
        return {
          url: "/user/verify",
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useEmailVerificationMutation,
  useGetUserQuery,
} = authApi;
