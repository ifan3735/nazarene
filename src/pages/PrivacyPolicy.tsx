import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <section className="max-w-4xl w-full bg-white shadow-md rounded p-8 mb-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          Your privacy is important to us. This Privacy Policy explains how Vehicle Rental Management System collects, uses, and protects your personal information.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-2">
            We collect information that you provide directly to us when using our services, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>Personal details such as name, email address, phone number, and billing information.</li>
            <li>Vehicle rental details including booking dates, vehicle preferences, and payment information.</li>
            <li>Communication records such as customer service inquiries and feedback.</li>
          </ul>
          <p className="text-gray-700 mb-2">
            We may also collect information automatically, such as your IP address, browser type, and access times.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-2">
            We use your information to provide, maintain, and improve our services, including:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>Processing your bookings and payments.</li>
            <li>Communicating with you about your bookings and responding to your inquiries.</li>
            <li>Personalizing your experience and providing recommendations.</li>
            <li>Improving our services and developing new features.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
          <p className="text-gray-700 mb-2">
            We do not share your personal information with third parties except in the following cases:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>With your consent or at your direction.</li>
            <li>With service providers who perform services on our behalf, such as payment processing and vehicle rental partners.</li>
            <li>To comply with legal obligations, protect our rights, and prevent fraud.</li>
          </ul>
          <p className="text-gray-700 mb-2">
            We do not sell your personal information to third parties.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="text-gray-700 mb-2">
            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. These measures include encryption, secure storage, and access controls.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Your Choices</h2>
          <p className="text-gray-700 mb-2">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li>Access and update your personal information.</li>
            <li>Request the deletion of your personal information.</li>
            <li>Opt out of receiving marketing communications from us.</li>
          </ul>
          <p className="text-gray-700 mb-2">
            To exercise these rights, please contact us using the information provided below.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
          <p className="text-gray-700 mb-2">
            We may update this Privacy Policy from time to time. Changes will be posted on our website, and we will notify you of any significant changes.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p className="text-gray-700 mb-2">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-700 mb-2">Email: privacy@vehiclerental.com</p>
          <p className="text-gray-700 mb-2">Phone: +1 (555) 123-4567</p>
          <p className="text-gray-700 mb-2">Address: 123 Main Street, Anytown, USA</p>
        </div>
      </section>
    </div>
    <Footer />
    </div>
  );
};

export default PrivacyPolicy;
