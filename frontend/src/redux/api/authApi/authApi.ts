import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/ui/'
    }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (user) => {
                return {
                    url: '/registration',
                    method: 'POST',
                    body: user
                }
            }
        })
    })
})

export const {useRegisterMutation} = authApi;