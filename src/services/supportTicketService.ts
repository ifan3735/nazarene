import axios from '../utils/axios';
import { SupportTicket } from '../types';

// Fetch all support tickets
export const fetchSupportTickets = async (): Promise<SupportTicket[]> => {
  try {
    const response = await axios.get('/api/support-tickets');
    return response.data;
  } catch (error) {
    console.error('Error fetching support tickets:', error);
    return [];
  }
};

// Update support ticket status
export const updateTicketStatus = async (id: number, status: 'open' | 'closed'): Promise<SupportTicket | null> => {
  try {
    const response = await axios.patch(`/api/support-tickets/${id}`, { status });
    return response.data;
  } catch (error) {
    console.error('Error updating ticket status:', error);
    return null;
  }
};
