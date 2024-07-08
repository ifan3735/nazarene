import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
       {/* Header */}
      <section className="max-w-4xl text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">About Our Company</h1>
        <p className="text-gray-700 text-lg">
          Welcome to Vehicle Rental Management System, your trusted partner for seamless and efficient vehicle rentals. Our mission is to provide top-notch rental services with a wide range of vehicles to meet all your needs.
        </p>
      </section>

      <section className="bg-white shadow-md rounded p-8 mb-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4 text-center">Our History</h2>
        <p className="text-gray-700 mb-4">
          Founded in 2010, Vehicle Rental Management System has grown to become a leader in the vehicle rental industry. Our commitment to excellent service and customer satisfaction has driven our expansion to multiple locations across the country.
        </p>
        <p className="text-gray-700">
          We started with a small fleet and a big vision, and today we offer a diverse selection of vehicles, from compact cars to luxury SUVs, ensuring that our customers have the best options available.
        </p>
      </section>

      <section className="bg-white shadow-md rounded p-8 mb-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4 text-center">Our Values</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
            <div className="bg-gray-200 rounded p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-700">We believe in honesty and transparency in all our dealings.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
            <div className="bg-gray-200 rounded p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Customer First</h3>
              <p className="text-gray-700">Our customers are at the heart of everything we do.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
            <div className="bg-gray-200 rounded p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-700">We strive to innovate and improve our services continuously.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
            <div className="bg-gray-200 rounded p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Quality</h3>
              <p className="text-gray-700">We are committed to providing the highest quality vehicles and service.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
            <div className="bg-gray-200 rounded p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Teamwork</h3>
              <p className="text-gray-700">We value the strength that comes from collaboration and diversity.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
            <div className="bg-gray-200 rounded p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-700">We are committed to environmentally sustainable practices.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white shadow-md rounded p-8 mb-12 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4 text-center">Meet Our Team</h2>
        <div className="flex flex-wrap -mx-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
              <div className="text-center">
                <img src={member.photo} alt={member.name} className="rounded-full w-24 h-24 object-cover mx-auto mb-4" />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-700">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 text-white p-8 rounded shadow-md text-center w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg mb-4">Have questions? Want to know more about our services? Feel free to reach out to us!</p>
        <Link to="/contact" className="bg-white text-blue-600 py-2 px-4 rounded font-bold hover:bg-gray-200">
          Contact Us
        </Link>
      </section>
    </div>
  );
};

// Sample team members data
const teamMembers = [
  {
    name: 'Ifan Xavier',
    position: 'CEO',
    photo: 'https://i.pinimg.com/236x/5b/72/cc/5b72ccd75cd3a72e6d3e90c2b1bcdc19.jpg',
  },
  {
    name: 'Bob Smith',
    position: 'Chief Technology Officer',
    photo: 'https://i.pinimg.com/236x/8b/bc/31/8bbc3169e91d25fdd43f9b31306917ee.jpg',
  },
  {
    name: 'Charlie Brown',
    position: 'Chief Operating Officer',
    photo: 'https://i.pinimg.com/236x/4d/9c/34/4d9c34104c98b22ea66bf6b8f64ff5b6.jpg',
  },
  {
    name: 'Dana White',
    position: 'Head of Customer Service',
    photo: 'https://i.pinimg.com/236x/db/62/2f/db622f596ac659f209ddad8acd27c2c3.jpg',
  },
];

export default About;
