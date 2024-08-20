import React from 'react';
import Header from './Header';
import { ShoppingCart, Smartphone, Brain, Cloud, Cpu, DollarSign, BarChart3 } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-duration-300">
    <Icon className="w-12 h-12 text-indigo-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesPage = () => {
  const services = [
    { 
      icon: ShoppingCart, 
      title: "E-commerce Development & Migration", 
      description: "Build robust, scalable e-commerce solutions and seamlessly migrate to cloud platforms."
    },
    { 
      icon: Smartphone, 
      title: "iOS App Development", 
      description: "Create powerful, feature-rich iOS applications integrated with your e-commerce platform."
    },
    { 
      icon: Brain, 
      title: "Machine Learning & Gen AI Solutions", 
      description: "Leverage cutting-edge ML and AI technologies to drive innovation and business intelligence."
    },
    { 
      icon: Cloud, 
      title: "Google Cloud FinOps & Migration", 
      description: "Optimize your Google Cloud costs and seamlessly migrate your infrastructure for maximum efficiency."
    },
    { 
      icon: Cpu, 
      title: "Compute Efficiency Optimization", 
      description: "Maximize performance and minimize costs across your entire compute infrastructure."
    },
    { 
      icon: DollarSign, 
      title: "Cost Mitigation Strategies", 
      description: "Implement comprehensive strategies to reduce and control your technology spending."
    },
    { 
      icon: BarChart3, 
      title: "Inventory & Demand Planning", 
      description: "Optimize your inventory management with ML-powered demand forecasting."
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          At Emendatio, we offer a comprehensive suite of technology services designed to elevate your business. Explore our offerings below:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;