import React from 'react';

const Success: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-green-500 mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13l4 4L19 7" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          <h1 className="text-3xl font-semibold text-gray-800">Payment Successful!</h1>
        </div>
        <p className="text-gray-600 text-lg text-center mb-6">
          Your payment has been processed successfully. Thank you for your purchase!
        </p>
        <div className="text-center">
          <a
            href="/dashboard"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default Success;
