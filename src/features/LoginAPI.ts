import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Details {
    name: string;
    email: string;
    password: string;
}

export interface User {
    id: number;
    email: string;
    role: string;
    token: string;
}

export interface User2 {   
    id: number;
    name: string;
    email: string;
}

export interface User3 {
    id: number;
    currentPassword: string;
    newPassword: string;
}

export interface Vehicle {
    vehicle_spec_id: number;
    availability: 'available' | 'booked';
    rental_rate: number;
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
    status: 'closed' | 'open';
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
    id: number;
    token: string;
    email: string;
    role: string;
}

export interface RegisterResponse {}

export interface Id {
    id: number;
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:3000',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('authToken');
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
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
        fetchOneUser: builder.query<User2, number>({
            query: (id) => `/users/${id}`,
        }),
        updateUser: builder.mutation<void, User2>({
            query: (user) => ({
                url: `/users/${user.id}`,
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
        fetchOneVehicle: builder.query<Vehicle, number>({
            query: (id) => `/vehicles/${id}`,
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
        fetchVehicleDetails: builder.query<Vehicle, number>({
            query: (id) => `/vehicles/${id}`,
        }),
        checkAvailability: builder.query<RemotePlaybackAvailabilityCallback, { vehicleId: number; bookingDate: string; numberOfDays: number }>({
            query: ({ vehicleId, bookingDate, numberOfDays }) => ({
                url: `/vehicles/${vehicleId}`,
                params: { bookingDate, numberOfDays },
            }),
        }),
        bookVehicle: builder.mutation<void, { vehicleId: number; bookingDate: string; numberOfDays: number }>({
            query: (booking) => ({
                url: '/bookings',
                method: 'POST',
                body: booking,
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
            query: (location) => ({
                url: '/locations',
                method: 'POST',
                body: location,
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
            query: (supportTicket) => ({
                url: '/customerSupportTickets',
                method: 'POST',
                body: supportTicket,
            }),
        }),
        deleteSupportTicket: builder.mutation<void, number>({
            query: (id) => ({
                url: `/customerSupportTickets/${id}`,
                method: 'DELETE',
            }),
        }),
        updateSupportTicket: builder.mutation<SupportTicket, { id: number; supportTicket: SupportTicket }>({
            query: ({ id, supportTicket }) => ({
                url: `/customerSupportTickets/${id}`,
                method: 'PUT',
                body: supportTicket,
            }),
        }),
        fetchAllFleet: builder.query<Fleet[], void>({
            query: () => '/fleet',
        }),
        addFleet: builder.mutation<Fleet, Fleet>({
            query: (fleet) => ({
                url: '/fleet',
                method: 'POST',
                body: fleet,
            }),
        }),
        deleteFleet: builder.mutation<void, number>({
            query: (id) => ({
                url: `/fleet/${id}`,
                method: 'DELETE',
            }),
        }),
        updateFleet: builder.mutation<Fleet, { id: number; fleet: Fleet }>({
            query: ({ id, fleet }) => ({
                url: `/fleet/${id}`,
                method: 'PUT',
                body: fleet,
            }),
        }),
        fetchUserProfile: builder.query<User, Id>({
            query: (id) => `/user/${id}`,
        }),
        updateUserProfile: builder.mutation<User, User>({
            query: (user) => ({
                url:`/user/${user.id}`,
                method: 'PUT',
                body: user,
            }),
        }),
        updateUserPassword: builder.mutation<User3, User3>({
            query: (user) => ({
                url: `/user/${user.id}`,
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
    useUpdateFleetMutation, useFetchOneUserQuery, useUpdateUserPasswordMutation,
     useSetNotificationsMutation, useBookVehicleMutation, 
     useFetchVehicleDetailsQuery, useCheckAvailabilityQuery  } = apiSlice as {
        useCheckAvailabilityQuery: (Id) => ReturnType<typeof apiSlice.endpoints.checkAvailability.useQuery>;
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
    useFetchOneUserQuery: (id: number) => ReturnType<typeof apiSlice.endpoints.fetchOneUser.useQuery>;
    // useFetchUserProfileQuery: () => ReturnType<typeof apiSlice.endpoints.fetchUserProfile.useQuery>;
    // useUpdateUserProfileMutation: () => ReturnType<typeof apiSlice.endpoints.updateUserProfile.useMutation>;
    useUpdateUserPasswordMutation: () => ReturnType<typeof apiSlice.endpoints.updateUserPassword.useMutation>;
    // useSetProfileMutation: () => ReturnType<typeof apiSlice.endpoints.setProfile.useMutation>;
    // useSetPasswordMutation: () => ReturnType<typeof apiSlice.endpoints.setPassword.useMutation>;
    useSetNotificationsMutation: () => ReturnType<typeof apiSlice.endpoints.setNotifications.useMutation>;
    useFetchVehicleDetailsQuery: (id: number) => ReturnType<typeof apiSlice.endpoints.fetchVehicleDetails.useQuery>;
    useBookVehicleMutation: () => ReturnType<typeof apiSlice.endpoints.bookVehicle.useMutation>;
};