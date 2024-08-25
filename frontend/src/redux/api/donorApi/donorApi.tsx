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
    }),
  }),
});

export const { useCerateDonarMutation } = donorApi;
