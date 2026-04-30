const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About TechServices</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading technology services company dedicated to delivering innovative solutions that drive business growth and digital transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To empower businesses with cutting-edge technology solutions that enhance productivity, security, and competitiveness in an ever-evolving digital landscape.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              To be the premier technology partner for businesses worldwide, recognized for our innovation, expertise, and commitment to excellence.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Innovation: Embracing new technologies to solve complex challenges</li>
              <li>• Excellence: Delivering high-quality solutions that exceed expectations</li>
              <li>• Integrity: Building trust through transparent and ethical practices</li>
              <li>• Collaboration: Working closely with clients as trusted partners</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Expert Team</h4>
                  <p className="text-gray-600">Our team of skilled professionals brings years of experience in various technology domains.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Tailored Solutions</h4>
                  <p className="text-gray-600">We customize our services to meet the unique needs and goals of each client.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div className="ml-4">
                  <h4 className="font-semibold">Proven Track Record</h4>
                  <p className="text-gray-600">Our successful projects and satisfied clients speak to our commitment to quality and results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;