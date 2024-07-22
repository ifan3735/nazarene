export type UserRole = 'admin' | 'user';

export interface User {
  id: number;
  name: string;
  email: string;
  contact_phone: string;
  address: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

// src/types.ts
export interface Vehicle {
  vehicle_specs: any;
  id: number;
  vehicle_spec_id: number;
  availability: string;
  created_at: string;
  updated_at: string;
  rental_rate: number;
}


// Additional types for other entities...

export interface BookingReport {
  data: Chart.ChartData;
  options: Chart.ChartOptions;
}

export interface RevenueReport {
  data: Chart.ChartData;
  options: Chart.ChartOptions;
}

export interface VehicleUtilizationReport {
  data: Chart.ChartData;
  options: Chart.ChartOptions;
}

export interface ReportResponse {
  booking: BookingReport | null;
  revenue: RevenueReport | null;
  utilization: VehicleUtilizationReport | null;
}

export interface Location {
  id: number;
  name: string;
  address: string;
  contact_phone: string;
  created_at: string;
  updated_at: string;
}

export interface SupportTicket {
  id: number;
  user_id: number;
  subject: string;
  description: string;
  status: 'open' | 'closed';
  created_at: string;
  updated_at: string;
}

export interface FleetManagements {
  id: number;
  vehicle_id: number;
  acquisition_date: string;
  depreciation_rate: number;
  current_value: number;
  maintenance_cost: number;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

export interface Booking {
  id: number;
  user_id: number;
  vehicle_id: number;
  start_date: string;
  end_date: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
}

export interface Payment {
  id: number;
  user_id: number;
  booking_id: number;
  amount: number;
  status: 'pending' | 'paid';
  created_at: string;
  updated_at: string;
}