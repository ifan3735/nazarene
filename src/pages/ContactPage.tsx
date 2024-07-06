import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <section className="max-w-4xl text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-700 text-lg">
          We would love to hear from you. Fill out the form below or reach out to us through the provided contact information.
        </p>
      </section>

      <section className="w-full max-w-4xl flex flex-col md:flex-row bg-white shadow-md rounded p-8 mb-12">
        <form onSubmit={handleSubmit} className="flex-1 mb-8 md:mb-0 md:mr-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded h-32"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">Send Message</button>
        </form>

        <div className="flex-1 md:ml-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
          <p className="text-gray-700 mb-4">123 Main Street, Anytown, USA</p>
          <p className="text-gray-700 mb-4">Email: contact@vehiclerental.com</p>
          <p className="text-gray-700 mb-4">Phone: +1 (555) 123-4567</p>
          <h2 className="text-2xl font-semibold mb-4 mt-8">Our Location</h2>
          <div className="w-full h-48 bg-gray-300 rounded overflow-hidden">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609821758!2d-74.04314332499996!3d40.712775299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f4d7eaaaaaab%3A0xf9b06d4467c8d51d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1616156891454!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen={false}
              aria-hidden="false"
            ></iframe>
          </div>
        </div>
      </section>

      {submitted && (
        <div className="w-full max-w-4xl p-4 text-center bg-green-100 text-green-700 rounded">
          Thank you for contacting us. We will get back to you soon!
        </div>
      )}
    </div>
  );
};

export default ContactPage;
