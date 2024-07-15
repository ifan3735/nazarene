import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export interface Details {
    name: string;
    email: string;
    password: string;
}

export interface User {
    email: string;
    role: string;
    token: string;
}

export interface Vehicle {
    vehicle_spec_id: number;
    availability: string;
}

export interface LoginResponse {
  token: string;
//   user: User;
email: string;
role: string;
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
        adminLogin: builder.mutation<LoginResponse, { email: string; password: string }>({
            query: (credentials) => ({
                url: '/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        fetchAllUsers: builder.query<User[], void>({
            query: () => '/users',
        }),
        updateUser: builder.mutation<User, { id: number; user: User }>({
            query: ({ id, user }) => ({
                url: `/users/${id}`,
                method: 'PUT',
                body: user,
            }),
        }),
        deleteUser: builder.mutation<void, number>({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
        }),
        addUser: builder.mutation<User, User>({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user,
            }),
        }),
        fetchAllVehicles: builder.query<Vehicle[], void>({
            query: () => '/vehicles',
        }),
        updateVehicle: builder.mutation<Vehicle, { id: number; vehicle: Vehicle }>({
            query: ({ id, vehicle }) => ({
                url: `/vehicles/${id}`,
                method: 'PUT',
                body: vehicle,
            }),
        }),
        addVehicle: builder.mutation<Vehicle, Vehicle>({
            query: (vehicle) => ({
                url: '/vehicles',
                method: 'POST',
                body: vehicle,
            }),
        }),
        deleteVehicle: builder.mutation<void, number>({
            query: (id) => ({
                url: `/vehicles/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useLoginUserMutation, useRegisterUserMutation,useAdminLoginMutation, useFetchAllUsersQuery, useUpdateUserMutation, useDeleteUserMutation, useAddUserMutation, useFetchAllVehiclesQuery, useAddVehicleMutation, useDeleteVehicleMutation, useUpdateVehicleMutation } = apiSlice as {
    useLoginUserMutation: () => ReturnType<typeof apiSlice.endpoints.loginUser.useMutation>;
    useRegisterUserMutation: () => ReturnType<typeof apiSlice.endpoints.registerUser.useMutation>;
    useAdminLoginMutation: () => ReturnType<typeof apiSlice.endpoints.adminLogin.useMutation>;
    useFetchAllUsersQuery: () => ReturnType<typeof apiSlice.endpoints.fetchAllUsers.useQuery>;
    useUpdateUserMutation: () => ReturnType<typeof apiSlice.endpoints.updateUser.useMutation>;
    useDeleteUserMutation: () => ReturnType<typeof apiSlice.endpoints.deleteUser.useMutation>;
    useAddUserMutation: () => ReturnType<typeof apiSlice.endpoints.addUser.useMutation>;
    useFetchAllVehiclesQuery: () => ReturnType<typeof apiSlice.endpoints.fetchAllVehicles.useQuery>;
    useUpdateVehicleMutation: () => ReturnType<typeof apiSlice.endpoints.updateVehicle.useMutation>;
    useAddVehicleMutation: () => ReturnType<typeof apiSlice.endpoints.addVehicle.useMutation>;
    useDeleteVehicleMutation: () => ReturnType<typeof apiSlice.endpoints.deleteVehicle.useMutation>;
};