import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <section className="max-w-4xl w-full bg-white shadow-md rounded p-8 mb-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms of Service</h1>
        <p className="text-gray-700 mb-4">
          Welcome to the Vehicle Rental Management System. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions.
        </p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. General Terms</h2>
          <p className="text-gray-700 mb-2">
            These terms govern your use of the Vehicle Rental Management System. You agree to use our services in accordance with these terms, applicable laws, and regulations.
          </p>
          <p className="text-gray-700 mb-2">
            We reserve the right to modify these terms at any time. Changes will be posted on our website, and your continued use of the services constitutes acceptance of the revised terms.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. User Obligations</h2>
          <p className="text-gray-700 mb-2">
            Users must provide accurate information during registration and maintain the confidentiality of their account information. Users are responsible for all activities under their account.
          </p>
          <p className="text-gray-700 mb-2">
            Users agree not to misuse the services, including engaging in unlawful activities, distributing malware, or attempting to gain unauthorized access to other accounts.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Rental Terms</h2>
          <p className="text-gray-700 mb-2">
            Vehicle rentals are subject to availability and must be used in accordance with the rental agreement. Users are responsible for the care and return of rented vehicles.
          </p>
          <p className="text-gray-700 mb-2">
            Damages, late returns, or violations of the rental agreement may incur additional charges as specified in the rental agreement.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Payment and Fees</h2>
          <p className="text-gray-700 mb-2">
            Users agree to pay all applicable fees for the rental services as outlined in the pricing section. Payments must be made using the accepted methods at the time of booking.
          </p>
          <p className="text-gray-700 mb-2">
            Refunds and cancellations are subject to our refund policy, which is available on our website.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-700 mb-2">
            We are not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services. Our liability is limited to the amount paid for the services.
          </p>
          <p className="text-gray-700 mb-2">
            We do not warrant that the services will be uninterrupted or error-free, and we are not responsible for any data loss or corruption.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Governing Law</h2>
          <p className="text-gray-700 mb-2">
            These terms are governed by the laws of the jurisdiction in which our company is based. Any disputes will be resolved in the courts of that jurisdiction.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
          <p className="text-gray-700 mb-2">
            If you have any questions about these terms, please contact us at:
          </p>
          <p className="text-gray-700 mb-2">Email: support@vehiclerental.com</p>
          <p className="text-gray-700 mb-2">Phone: +1 (555) 123-4567</p>
          <p className="text-gray-700 mb-2">Address: 123 Main Street, Anytown, USA</p>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
