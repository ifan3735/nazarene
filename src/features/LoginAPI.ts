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

export interface Location {
    name: string;
    address: string;
    contact_phone: string;
}

export interface SupportTicket {
    user_id: number;
    subject: string;
    description: string;
    status: typeof closed | typeof open;
}

export interface Fleet {
    vehicle_id: number;
    acquisition_date: string;
    depreciation_rate: number;
    current_value: number;
    maintenance_cost: number;
    status: string;
}

export interface LoginResponse {
  token: string;
//   user: User;
email: string;
role: string;
}

export interface RegisterResponse {
}

export interface Id {
    id: string;
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
            query: ({ id, ...user }) => ({
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
        fetchAllLocations: builder.query<Location[], void>({
            query: () => '/locations',
        }),
        updateLocation: builder.mutation<Location, { id: number; location: Location }>({
            query: ({ id, location }) => ({
                url: `/locations/${id}`,
                method: 'PUT',
                body: location,
            }),
        }),
        addLocation: builder.mutation<Location, Location>({
            query: (Location) => ({
                url: '/locations',
                method: 'POST',
                body: Location,
            }),
        }),
        deleteLocation: builder.mutation<void, number>({
            query: (id) => ({
                url: `/locations/${id}`,
                method: 'DELETE',
            }),
        }),
        fetchAllSupportTickets: builder.query<SupportTicket[], void>({
            query: () => '/customerSupportTickets',
        }),
        addSupportTicket: builder.mutation<SupportTicket, SupportTicket>({
            query: (SupportTicket) => ({
                url: '/customerSupportTickets',
                method: 'POST',
                body: SupportTicket,
            }),
        }),
        deleteSupportTicket: builder.mutation<void, number>({
            query: (id) => ({
                url: `/customerSupportTickets/${id}`,
                method: 'DELETE',
            }),
        }),
        updateSupportTicket: builder.mutation<SupportTicket, { id: number; SupportTicket: SupportTicket }>({
            query: ({ id, SupportTicket }) => ({
                url: `/customerSupportTickets/${id}`,
                method: 'PUT',
                body: SupportTicket,
            }),
        }),
        fetchAllFleet: builder.query<Fleet[], void>({
            query: () => '/fleet',
        }),
        addFleet: builder.mutation<Fleet, Fleet>({
            query: (Fleet) => ({
                url: '/fleet',
                method: 'POST',
                body: Fleet,
            }),
        }),
        deleteFleet: builder.mutation<void, number>({
            query: (id) => ({
                url: `/fleet/${id}`,
                method: 'DELETE',
            }),
        }),
        updateFleet: builder.mutation<Fleet, { id: number; Fleet: Fleet }>({
            query: ({ id, Fleet }) => ({
                url: `/fleet/${id}`,
                method: 'PUT',
                body: Fleet,
            }),
        }),
        fetchUserProfile: builder.query<User, Id>({
            query: (Id) => `/user/${Id}`,
        }),
        updateUserProfile: builder.mutation<User, User>({
            query: (Id) => ({
                url:`/user/${Id}`,
                method: 'PUT',
                body: Id,
            }),
        }),
        updateUserPassword: builder.mutation<User, User>({
            query: (user) => ({
                url: '/api/user/password',
                method: 'PUT',
                body: user,
            }),
        }),
        setProfile: builder.mutation<User, User>({
            query: (user) => ({
                url: '/api/user/profile',
                method: 'PUT',
                body: user,
            }),
        }),
        setPassword: builder.mutation<User, User>({
            query: (user) => ({
                url: '/api/user/password',
                method: 'PUT',
                body: user,
            }),
        }),
        setNotifications: builder.mutation<User, User>({
            query: (user) => ({
                url: '/api/user/notifications',
                method: 'PUT',
                body: user,
            }),
        }),
    }),
});

export const { useLoginUserMutation, useRegisterUserMutation,
    useAdminLoginMutation, useFetchAllUsersQuery, 
    useUpdateUserMutation, useDeleteUserMutation, 
    useAddUserMutation, useFetchAllVehiclesQuery,
     useAddVehicleMutation, useDeleteVehicleMutation, 
     useUpdateVehicleMutation, useAddLocationMutation,
     useDeleteLocationMutation,useFetchAllLocationsQuery,
     useUpdateLocationMutation, useAddSupportTicketMutation,
    useFetchAllSupportTicketsQuery, useDeleteSupportTicketMutation,
    useUpdateSupportTicketMutation, useAddFleetMutation,
    useDeleteFleetMutation, useFetchAllFleetQuery, 
    useUpdateFleetMutation, } = apiSlice as {
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
    useFetchAllLocationsQuery: () => ReturnType<typeof apiSlice.endpoints.fetchAllLocations.useQuery>;
    useUpdateLocationMutation: () => ReturnType<typeof apiSlice.endpoints.updateLocation.useMutation>;
    useAddLocationMutation: () => ReturnType<typeof apiSlice.endpoints.addLocation.useMutation>;
    useDeleteLocationMutation: () => ReturnType<typeof apiSlice.endpoints.deleteLocation.useMutation>;
    useFetchAllSupportTicketsQuery: () => ReturnType<typeof apiSlice.endpoints.fetchAllSupportTickets.useQuery>;
    useAddSupportTicketMutation: () => ReturnType<typeof apiSlice.endpoints.addSupportTicket.useMutation>;
    useDeleteSupportTicketMutation: () => ReturnType<typeof apiSlice.endpoints.deleteSupportTicket.useMutation>;
    useUpdateSupportTicketMutation: () => ReturnType<typeof apiSlice.endpoints.updateSupportTicket.useMutation>;
    useFetchAllFleetQuery: () => ReturnType<typeof apiSlice.endpoints.fetchAllFleet.useQuery>;
    useAddFleetMutation: () => ReturnType<typeof apiSlice.endpoints.addFleet.useMutation>;
    useDeleteFleetMutation: () => ReturnType<typeof apiSlice.endpoints.deleteFleet.useMutation>;
    useUpdateFleetMutation: () => ReturnType<typeof apiSlice.endpoints.updateFleet.useMutation>;
    // useFetchUserProfileQuery: () => ReturnType<typeof apiSlice.endpoints.fetchUserProfile.useQuery>;
    // useUpdateUserProfileMutation: () => ReturnType<typeof apiSlice.endpoints.updateUserProfile.useMutation>;
    // useUpdateUserPasswordMutation: () => ReturnType<typeof apiSlice.endpoints.updateUserPassword.useMutation>;
    // useSetProfileMutation: () => ReturnType<typeof apiSlice.endpoints.setProfile.useMutation>;
    // useSetPasswordMutation: () => ReturnType<typeof apiSlice.endpoints.setPassword.useMutation>;
    // useSetNotificationsMutation: () => ReturnType<typeof apiSlice.endpoints.setNotifications.useMutation>;
};