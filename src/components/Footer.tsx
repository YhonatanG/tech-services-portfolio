import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">TechServices</h3>
            <p className="text-gray-300">
              Delivering innovative technology solutions for businesses worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition duration-300">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition duration-300">About</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-white transition duration-300">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Web Development</li>
              <li className="text-gray-300">Mobile Apps</li>
              <li className="text-gray-300">AI Solutions</li>
              <li className="text-gray-300">Cloud Services</li>
              <li className="text-gray-300">Cybersecurity</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="text-gray-300">Email: info@techservices.com</p>
            <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-300">Address: 123 Tech Street, Silicon Valley, CA</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; 2024 TechServices. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;