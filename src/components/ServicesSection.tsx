import React from 'react';
import { Code, Cpu, Globe, Cloud, Shield, Smartphone } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => (
  <div className="bg-space-gray p-8 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300 shadow-neon group">
    <div className="text-neon-blue mb-6 flex justify-center animate-float group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
    <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
    <ul className="text-left space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start space-x-2 text-gray-300">
          <span className="text-neon-blue mt-1">•</span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Code size={48} />,
      title: "Custom Software Development",
      description: "Tailored solutions designed to meet your unique business challenges and objectives.",
      features: [
        "Enterprise software solutions",
        "API development and integration",
        "Legacy system modernization",
        "Microservices architecture",
      ]
    },
    {
      icon: <Cpu size={48} />,
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to transform your business processes.",
      features: [
        "Predictive analytics",
        "Natural language processing",
        "Computer vision solutions",
        "AI-powered automation",
      ]
    },
    {
      icon: <Globe size={48} />,
      title: "Web Applications",
      description: "Modern, responsive web applications that deliver exceptional user experiences.",
      features: [
        "Progressive Web Apps (PWA)",
        "Single Page Applications (SPA)",
        "E-commerce platforms",
        "Real-time applications",
      ]
    },
    {
      icon: <Smartphone size={48} />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "Native iOS & Android apps",
        "Cross-platform solutions",
        "Mobile app optimization",
        "Wearable technology",
      ]
    },
    {
      icon: <Cloud size={48} />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services for modern businesses.",
      features: [
        "Cloud migration strategies",
        "Serverless architecture",
        "DevOps automation",
        "Cloud-native development",
      ]
    },
    {
      icon: <Shield size={48} />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      features: [
        "Security audits & testing",
        "Blockchain security",
        "Secure API development",
        "Compliance solutions",
      ]
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-center animate-text-glow">Our Services</h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Empowering businesses with cutting-edge technology solutions that drive growth and innovation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;