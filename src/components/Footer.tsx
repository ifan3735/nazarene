import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center px-4">
        {/* Copyright and Links */}
        <div className="text-center mb-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Nazarene Vehicle Rental. All rights reserved.</p>
          <nav className="mt-2">
            <Link to="/contact" className="text-blue-400 hover:underline mx-2">Contact Us</Link>
            <Link to="/terms" className="text-blue-400 hover:underline mx-2">Terms of Service</Link>
            <Link to="/privacy" className="text-blue-400 hover:underline mx-2">Privacy Policy</Link>
          </nav>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-white transition duration-300">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition duration-300">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-white transition duration-300">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-white transition duration-300">
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
