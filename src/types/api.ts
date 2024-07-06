import { User, Vehicle, Booking, Payment, SupportTicket, Location, FleetManagements } from './index';

export interface UserListResponse {
  users: User[];
}

export interface VehicleListResponse {
  vehicles: Vehicle[];
}

export interface BookingListResponse {
  bookings: Booking[];
}

export interface PaymentListResponse {
  payments: Payment[];
}

export interface SupportTicketListResponse {
  tickets: SupportTicket[];
}

export interface LocationListResponse {
  locations: Location[];
}

export interface FleetManagementListResponse {
  fleet: FleetManagements[];
}
