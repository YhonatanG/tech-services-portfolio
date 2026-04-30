import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Innovative Technology Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge web development, mobile apps, AI solutions, cloud services, and cybersecurity.
          </p>
          <div className="space-x-4">
            <Link to="/services">
              <Button>Our Services</Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;