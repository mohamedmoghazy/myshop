import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";
import { logout } from "./authSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/users`,
                method: 'POST',
                body: data
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/auth/logout`,
                method: 'POST'
            }),
            onQueryStarted: () =>
            {
                logout();
            }
        }),
    })
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = usersApiSlice;