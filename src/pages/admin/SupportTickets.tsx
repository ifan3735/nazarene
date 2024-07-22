import React, { useState } from 'react';
import {
  useFetchAllSupportTicketsQuery,
  useUpdateSupportTicketMutation,
  useDeleteSupportTicketMutation,
  useAddSupportTicketMutation,
} from '../../features/LoginAPI';
import { SupportTicket } from '../../types';

const SupportTickets: React.FC = () => {
  const { data: supportTickets = [], refetch } = useFetchAllSupportTicketsQuery();
  console.log(supportTickets);
  const [updateSupportTicket] = useUpdateSupportTicketMutation();
  console.log(updateSupportTicket);
  const [deleteSupportTicket] = useDeleteSupportTicketMutation();
  console.log(deleteSupportTicket);
  const [addSupportTicket] = useAddSupportTicketMutation();
  console.log(addSupportTicket);
  const [selectedSupportTicket, setSelectedSupportTicket] = useState<SupportTicket | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newSupportTicket, setNewSupportTicket] = useState<Omit<SupportTicket, 'id' | 'created_at' | 'updated_at'>>({
    user_id: 0,
    subject: '',
    description: '',
    status: 'open',
  });

  const handleAddSupportTicket = async () => {
    try {
      const addedSupportTicket = await addSupportTicket(newSupportTicket).unwrap();
      if (addedSupportTicket) {
        setNewSupportTicket({
          user_id: 0,
          subject: '',
          description: '',
          status: 'open',
        });
        refetch(); // Optionally refetch data to get the latest from server
      }
    } catch (error) {
      console.error('Error adding support ticket:', error);
    }
  };

  const handleEditSupportTicket = (supportTicket: SupportTicket) => {
    setSelectedSupportTicket(supportTicket);
    setNewSupportTicket({
      user_id: supportTicket.user_id,
      subject: supportTicket.subject,
      description: supportTicket.description,
      status: supportTicket.status,
    });
    setIsEditing(true);
  };

  const handleUpdateSupportTicket = async () => {
    if (selectedSupportTicket) {
      try {
        const updated = await updateSupportTicket({ id: selectedSupportTicket.id, supportTicket: newSupportTicket }).unwrap();
        if (updated) {
          setSelectedSupportTicket(null);
          setNewSupportTicket({
            user_id: 0,
            subject: '',
            description: '',
            status: 'open',
          });
          setIsEditing(false);
          refetch(); // Optionally refetch data to get the latest from server
        }
      } catch (error) {
        console.error('Error updating support ticket:', error);
      }
    }
  };

  const handleDeleteSupportTicket = async (id: number) => {
    try {
      await deleteSupportTicket(id).unwrap();
      refetch(); // Optionally refetch data to get the latest
    } catch (error) {
      console.error('Error deleting support ticket:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200">
      <h1 className="text-2xl font-bold mb-4">Support Tickets</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{isEditing ? 'Edit Support Ticket' : 'Add New Support Ticket'}</h2>
          <input
            type="number"
            placeholder="User ID"
            className="block w-full p-2 mb-3 border rounded"
            value={newSupportTicket.user_id}
            onChange={(e) => setNewSupportTicket({ ...newSupportTicket, user_id: parseInt(e.target.value) })}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="block w-full p-2 mb-3 border rounded"
            value={newSupportTicket.subject}
            onChange={(e) => setNewSupportTicket({ ...newSupportTicket, subject: e.target.value })}
            required
          />
          <textarea
            placeholder="Description"
            className="block w-full p-2 mb-3 border rounded"
            value={newSupportTicket.description}
            onChange={(e) => setNewSupportTicket({ ...newSupportTicket, description: e.target.value })}
            required
          />
          <select
            className="block w-full p-2 mb-3 border rounded"
            value={newSupportTicket.status}
            onChange={(e) => setNewSupportTicket({ ...newSupportTicket, status: e.target.value as "open" | "closed" })}
            required
          >
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
          <button
            onClick={isEditing ? handleUpdateSupportTicket : handleAddSupportTicket}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {isEditing ? 'Update Support Ticket' : 'Add Support Ticket'}
          </button>
        </div>
        <h2 className="text-xl font-semibold mb-2">Existing Support Tickets</h2>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">User ID</th>
              <th className="py-2 px-4 border-b">Subject</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Created At</th>
              <th className="py-2 px-4 border-b">Updated At</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {supportTickets.map((supportTicket: any) => (
              <tr key={supportTicket.id}>
                <td className="py-2 px-4 border-b">{supportTicket.id}</td>
                <td className="py-2 px-4 border-b">{supportTicket.user_id}</td>
                <td className="py-2 px-4 border-b">{supportTicket.subject}</td>
                <td className="py-2 px-4 border-b">{supportTicket.description}</td>
                <td className="py-2 px-4 border-b">{supportTicket.status}</td>
                <td className="py-2 px-4 border-b">{supportTicket.created_at}</td>
                <td className="py-2 px-4 border-b">{supportTicket.updated_at}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2"
                    onClick={() => handleEditSupportTicket(supportTicket)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDeleteSupportTicket(supportTicket.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupportTickets;
