import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/ui/user'
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
        }),
        login: builder.mutation({
            query: (user) => {
                return {
                    url: '/login',
                    method: 'POST',
                    body: user
                }
            }
        })
    })
})

export const {useRegisterMutation,useLoginMutation} = authApi;