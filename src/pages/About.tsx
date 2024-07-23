import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-green-200 via-pink-200 to-blue-300 flex flex-col items-center p-6">
        {/* About Section */}
        <section className="max-w-4xl text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-8 text-purple-800">About Our Company</h1>
          <p className="text-gray-800 text-lg leading-relaxed">
            Welcome to Vehicle Rental Management System, your trusted partner for seamless and efficient vehicle rentals.
            Our mission is to provide top-notch rental services with a wide range of vehicles to meet all your needs.
          </p>
        </section>

        {/* Our History Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12 w-full max-w-4xl">
          <h2 className="text-3xl font-semibold mb-6 text-center text-purple-700">Our History</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2010, Vehicle Rental Management System has grown to become a leader in the vehicle rental industry.
            Our commitment to excellent service and customer satisfaction has driven our expansion to multiple locations across the country.
          </p>
          <p className="text-gray-700">
            We started with a small fleet and a big vision, and today we offer a diverse selection of vehicles, from compact cars to luxury SUVs,
            ensuring that our customers have the best options available.
          </p>
        </section>

        {/* Our Values Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12 w-full max-w-4xl">
          <h2 className="text-3xl font-semibold mb-6 text-center text-purple-700">Our Values</h2>
          <div className="flex flex-wrap -mx-4">
            {values.map((value, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
                <div className="bg-gradient-to-r from-purple-200 to-purple-400 rounded-lg p-6 text-center shadow-md">
                  <h3 className="text-2xl font-bold mb-2 text-white">{value.title}</h3>
                  <p className="text-white">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12 w-full max-w-4xl">
          <h2 className="text-3xl font-semibold mb-6 text-center text-purple-700">Meet Our Team</h2>
          <div className="flex flex-wrap -mx-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/4 px-4 mb-6">
                <div className="text-center">
                  <img src={member.photo} alt={member.name} className="rounded-full w-24 h-24 object-cover mx-auto mb-4 shadow-md transition-transform transform hover:scale-110" />
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-gray-700">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Get in Touch Section */}
        <section className="bg-blue-600 text-white p-8 rounded-lg shadow-lg text-center w-full max-w-4xl">
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-6">Have questions? Want to know more about our services? Feel free to reach out to us!</p>
          <Link to="/contact" className="bg-white text-blue-600 py-3 px-6 rounded-lg font-bold hover:bg-gray-200 transition-colors duration-300">
            Contact Us
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  );
};

// Sample values data
const values = [
  { title: 'Integrity', description: 'We believe in honesty and transparency in all our dealings.' },
  { title: 'Customer First', description: 'Our customers are at the heart of everything we do.' },
  { title: 'Innovation', description: 'We strive to innovate and improve our services continuously.' },
  { title: 'Quality', description: 'We are committed to providing the highest quality vehicles and service.' },
  { title: 'Teamwork', description: 'We value the strength that comes from collaboration and diversity.' },
  { title: 'Sustainability', description: 'We are committed to environmentally sustainable practices.' },
];

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
