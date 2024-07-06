import React, { useEffect, useState } from 'react';
import { fetchSupportTickets, updateTicketStatus } from '../../services/supportTicketService';
import { SupportTicket } from '../../types';

const SupportTickets: React.FC = () => {
  const [tickets, setTickets] = useState<SupportTicket[]>([]);

  useEffect(() => {
    const loadTickets = async () => {
      const response = await fetchSupportTickets();
      setTickets(response);
    };
    loadTickets();
  }, []);

  const handleStatusChange = async (id: number, status: 'open' | 'closed') => {
    const updated = await updateTicketStatus(id, status);
    if (updated) {
      setTickets(tickets.map(ticket => (ticket.id === id ? { ...ticket, status } : ticket)));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200">
      <h1 className="text-2xl font-bold mb-4">Customer Support Tickets</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-xl font-semibold mb-2">Existing Tickets</h2>
        <ul>
          {tickets.map(ticket => (
            <li key={ticket.id} className="flex justify-between items-center mb-2">
              <span>{ticket.subject} - {ticket.status}</span>
              <div>
                <button
                  className={`bg-${ticket.status === 'open' ? 'red' : 'green'}-500 text-white px-2 py-1 rounded hover:bg-${ticket.status === 'open' ? 'red' : 'green'}-600 mr-2`}
                  onClick={() => handleStatusChange(ticket.id, ticket.status === 'open' ? 'closed' : 'open')}
                >
                  {ticket.status === 'open' ? 'Close' : 'Reopen'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SupportTickets;
