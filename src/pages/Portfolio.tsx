import Card from '../components/Card';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with payment integration, inventory management, and analytics dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Healthcare Mobile App',
      description: 'A patient management app with appointment scheduling, telemedicine features, and secure data handling.',
      technologies: ['React Native', 'Firebase', 'HIPAA Compliant']
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Machine learning solution for predictive analytics and business intelligence reporting.',
      technologies: ['Python', 'TensorFlow', 'AWS', 'Tableau']
    },
    {
      title: 'Cloud Migration Project',
      description: 'Complete migration of legacy systems to cloud infrastructure with zero downtime.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and implementation of advanced threat protection measures.',
      technologies: ['Penetration Testing', 'SIEM', 'Zero Trust Architecture']
    },
    {
      title: 'IoT Smart Home System',
      description: 'Connected home automation platform with voice control and energy monitoring.',
      technologies: ['IoT', 'MQTT', 'Raspberry Pi', 'Alexa Integration']
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our successful projects and see how we've helped businesses achieve their technology goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
            >
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;