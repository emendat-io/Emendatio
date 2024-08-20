import React, { useState } from 'react';
import Header from './Header';
import { ArrowRight, CheckCircle, Star, Mail, Phone, Cloud, DollarSign, Cpu, ShoppingCart, Smartphone, Brain, BarChart3 } from 'lucide-react';


const Testimonial = ({ quote, author, company }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <div className="flex items-center">
      <div className="w-10 h-10 bg-indigo-500 rounded-full mr-3"></div>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-duration-300">
    <Icon className="w-12 h-12 text-indigo-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);


const StatisticItem = ({ value, label }) => (
    <div className="text-center">
      <div className="text-4xl font-bold text-indigo-600 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
  
  const CaseStudy = ({ title, description, result }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="font-semibold text-indigo-600">{result}</p>
    </div>
  );
  
  const HomePage = () => {
    const [expandedService, setExpandedService] = useState(null);
    const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with email:', email);
    setEmail('');
  };

  const services = [
    { 
      icon: ShoppingCart, 
      title: "E-commerce Development & Migration", 
      description: "Build robust, scalable e-commerce solutions and seamlessly migrate to cloud platforms.",
      details: (
        <>
          <p>At Emendatio, we specialize in end-to-end e-commerce solutions, from platform redesign to cloud migration. Our expertise is exemplified by our work with Z1motorsports, where we completely overhauled their e-commerce platform and successfully migrated it to Google Cloud Platform.</p>
          <p className="mt-2">Our focus:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Creating scalable, high-performance e-commerce ecosystems</li>
            <li>Driving business growth and enhancing user experience</li>
            <li>Ensuring seamless integration with existing systems</li>
            <li>Optimizing cloud performance</li>
            <li>Establishing a solid foundation for future scalability</li>
          </ul>
        </>
      )
    },
    { 
      icon: Smartphone, 
      title: "iOS App Development", 
      description: "Create powerful, feature-rich iOS applications integrated with your e-commerce platform.",
      details: (
        <>
          <p>Our iOS app development service extends your e-commerce reach through cutting-edge mobile experiences. We've created sophisticated, custom e-commerce apps that seamlessly integrate with existing platforms.</p>
          <p className="mt-2">Key features of our apps:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Advanced functionalities like FaceID login for enhanced security</li>
            <li>Push notifications with deep linking for improved user engagement</li>
            <li>Performance optimization for smooth user experience</li>
            <li>Intuitive design to boost mobile sales and enhance customer loyalty</li>
          </ul>
          <p className="mt-2">Our work with Z1motorsports demonstrates our ability to create powerful, user-friendly iOS applications that complement and enhance e-commerce platforms.</p>
        </>
      )
    },
    { 
      icon: Brain, 
      title: "Machine Learning & Gen AI Solutions", 
      description: "Leverage cutting-edge ML and AI technologies to drive innovation and business intelligence.",
      details: (
        <>
          <p>Emendatio harnesses the power of machine learning and AI to drive strategic decision-making and operational efficiency. We've collaborated with data science teams to develop sophisticated demand planning and inventory prediction platforms, leveraging the scalability of Google Cloud.</p>
          <p className="mt-2">Our AI solutions include:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Innovative 'single line of code' chat-with-product feature</li>
            <li>Optimized AI model usage for affordability without compromising performance</li>
            <li>Advanced AI solutions accessible and valuable for businesses of all sizes</li>
          </ul>
        </>
      )
    },
    { 
      icon: Cloud, 
      title: "Google Cloud FinOps & Migration", 
      description: "Optimize your Google Cloud costs and seamlessly migrate your infrastructure for maximum efficiency.",
      details: (
        <>
          <p>Our Google Cloud expertise encompasses both migration strategy and ongoing optimization. We provide comprehensive infrastructure assessment, seamless migration of complex systems, and implementation of FinOps practices for continuous cost management.</p>
          <p className="mt-2">Our approach includes:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Detailed planning and execution of migration with minimal disruption</li>
            <li>Post-migration optimization for peak performance</li>
            <li>Empowering your team through training and support</li>
            <li>Ensuring you maximize the benefits of Google Cloud while maintaining cost efficiency</li>
          </ul>
        </>
      )
    },
    { 
      icon: Cpu, 
      title: "Compute Efficiency Optimization", 
      description: "Maximize performance and minimize costs across your entire compute infrastructure.",
      details: (
        <>
          <p>Emendatio's compute efficiency service is designed to deliver tangible improvements to your infrastructure. We conduct comprehensive analyses of resource usage, identify performance bottlenecks, and implement tailored solutions.</p>
          <p className="mt-2">Our expertise includes:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Implementing auto-scaling and load balancing solutions</li>
            <li>Optimizing container and serverless architectures</li>
            <li>Achieving the perfect balance between performance and cost</li>
            <li>Providing ongoing monitoring and adjustments for sustained efficiency</li>
          </ul>
        </>
      )
    },
    { 
      icon: DollarSign, 
      title: "Cost Mitigation Strategies", 
      description: "Implement comprehensive strategies to reduce and control your technology spending.",
      details: (
        <>
          <p>Our cost mitigation strategies go beyond simple cost-cutting measures. We perform in-depth analyses of technology spending across all areas of your business.</p>
          <p className="mt-2">Our approach includes:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Implementing sophisticated chargeback and showback mechanisms</li>
            <li>Optimizing licensing and subscription costs</li>
            <li>Devising strategies for efficient use of cloud resources</li>
            <li>Building a culture of cost-awareness that doesn't compromise on innovation or performance</li>
          </ul>
          <p className="mt-2">We ensure that every dollar spent on technology drives real business value.</p>
        </>
      )
    },
    { 
      icon: BarChart3, 
      title: "Inventory & Demand Planning", 
      description: "Optimize your inventory management with ML-powered demand forecasting.",
      details: (
        <>
          <p>Emendatio's inventory and demand planning service leverages advanced analytics and machine learning to transform your supply chain management.</p>
          <p className="mt-2">Our solutions include:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Developing custom ML models for accurate demand forecasting</li>
            <li>Integrating with existing inventory systems</li>
            <li>Providing real-time analytics dashboards for actionable insights</li>
            <li>Implementing automated reordering systems based on predictive analytics</li>
            <li>Continuous model refinement for improved accuracy</li>
          </ul>
          <p className="mt-2">This data-driven approach helps you maintain optimal inventory levels, reducing costs while ensuring product availability and customer satisfaction.</p>
        </>
      )
    },
  ];

  const statistics = [
    { value: '25+', label: 'Clients Served' },
    { value: '99%', label: 'Client Retention Rate' },
    { value: '$6M+', label: 'Client Savings' },
    { value: '24/7', label: 'Support Available' },
  ];

  const caseStudies = [
    {
      title: 'E-commerce Platform Migration',
      description: 'Transformed a legacy e-commerce system into a modern, cloud-based platform.',
      result: 'Increased sales by 200% and reduced operational costs by 40%'
    },
    {
      title: 'AI-Driven Inventory Management',
      description: 'Implemented machine learning models for predictive inventory management.',
      result: 'Reduced stockouts by 75% and improved inventory turnover by 50%'
    }
  ];

 // JSON-LD structured data
 const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Emendatio",
    "description": "Expert consulting services in cloud, AI, and e-commerce solutions.",
    "url": "https://www.emendat.io",
    "logo": "https://www.emendat.io/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/emendatio",
      "https://twitter.com/emendatio"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-123-456-7890",
      "contactType": "customer service",
      "email": "info@emendat.io"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Emendatio: Elevate Your Tech Infrastructure</h1>
            <p className="text-xl mb-8">Optimize performance, reduce costs, and drive innovation with our expert consulting services.</p>
            <a href="#contact" className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full text-lg hover:bg-indigo-100 transition duration-300">Get Started</a>
          </div>
        </div>
      </header>
  
      <main className="container mx-auto px-4 py-16">
        {/* Statistics Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <StatisticItem key={index} {...stat} />
            ))}
          </div>
        </section>
  
        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} onClick={() => setExpandedService(expandedService === index ? null : index)}>
                <ServiceCard {...service} />
                {expandedService === index && (
                  <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
                    {service.details}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
  
        {/* Case Studies Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-12 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudy key={index} {...study} />
            ))}
          </div>
        </section>
  
        {/* Social Proof */}
        <section className="mb-20 bg-indigo-50 py-16 px-4 rounded-lg">
          <h2 className="text-3xl font-semibold mb-12 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial 
              quote="Emendatio transformed our cloud infrastructure, reducing costs by 40% while improving performance."
              author="Jane Doe"
              company="Tech Innovators Inc."
            />
            <Testimonial 
              quote="Their AI solutions have given us a competitive edge in the market. Highly recommended!"
              author="John Smith"
              company="Future Systems LLC"
            />
            <Testimonial 
              quote="The e-commerce platform they built for us has been a game-changer for our online sales."
              author="Emily Brown"
              company="Global Retail Co."
            />
          </div>
        </section>
  
        {/* Call to Action */}
        <section id="contact" className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Optimize Your Tech Stack?</h2>
          <p className="text-xl mb-8">Get in touch with our experts today for a free consultation.</p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-4 py-3 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-300">
              Get Started
            </button>
          </form>
        </section>
      </main>
  
      <footer className="bg-gray-800 text-white py-10 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Emendatio</h2>
              <p>Refining Technology, Elevating Performance</p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="mailto:info@emendatio.com" className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                info@emendatio.com
              </a>
              <a href="tel:+11234567890" className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                (123) 456-7890
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Emendatio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
  };

export default HomePage;