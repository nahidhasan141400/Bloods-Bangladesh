import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/ui", credentials: "include" }),
  tagTypes: ["user", "admin"],
  endpoints: () => ({}),
});
