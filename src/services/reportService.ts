import axios from '../utils/axios';
import { ReportResponse } from '../types';

// Fetch reports
export const fetchReports = async (): Promise<ReportResponse> => {
  try {
    const response = await axios.get<ReportResponse>('/api/reports');
    return response.data;
  } catch (error) {
    console.error('Error fetching reports:', error);
    return {
      booking: null,
      revenue: null,
      utilization: null,
    };
  }
};
