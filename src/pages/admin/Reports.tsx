import React, { useEffect, useState } from 'react';
import { fetchReports } from '../../services/reportService';
import { BookingReport, RevenueReport, VehicleUtilizationReport } from '../../types';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Reports: React.FC = () => {
  const [bookingReport, setBookingReport] = useState<BookingReport | null>(null);
  const [revenueReport, setRevenueReport] = useState<RevenueReport | null>(null);
  const [utilizationReport, setUtilizationReport] = useState<VehicleUtilizationReport | null>(null);

  useEffect(() => {
    const loadReports = async () => {
      const reports = await fetchReports();
      setBookingReport(reports.booking);
      setRevenueReport(reports.revenue);
      setUtilizationReport(reports.utilization);
    };
    loadReports();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-200">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-6xl">
        {bookingReport && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Booking Summary</h2>
            <Bar data={bookingReport.data} options={bookingReport.options} />
          </div>
        )}
        {revenueReport && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Revenue Report</h2>
            <Line data={revenueReport.data} options={revenueReport.options} />
          </div>
        )}
        {utilizationReport && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Vehicle Utilization</h2>
            <Pie data={utilizationReport.data} options={utilizationReport.options} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;
