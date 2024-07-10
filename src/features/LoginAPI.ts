import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Details {
    fullName: string;
    email: string;
    password: string;
}

export interface LoginResponse {
}

export interface RegisterResponse {
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        loginUser: builder.mutation<LoginResponse, { email: string; password: string }>({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        registerUser: builder.mutation<RegisterResponse, Details>({
            query: (userData) => ({
                url: '/register',
                method: 'POST',
                body: userData,
            }),
        }),
    }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = apiSlice as {
    useLoginUserMutation: () => ReturnType<typeof apiSlice.endpoints.loginUser.useMutation>;
    useRegisterUserMutation: () => ReturnType<typeof apiSlice.endpoints.registerUser.useMutation>;
};