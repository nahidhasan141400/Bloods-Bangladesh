import { api } from "../api";

const donorApi = api.injectEndpoints({
    endpoints: (builder) => ({
        registerDonar: builder.mutation({
            query: (data) => {
                return {
                    url: "/donor/registration",
                    method: "POST",
                    body: data,
                }
            }
        })
    })
})

export const {useRegisterDonarMutation} = donorApi;