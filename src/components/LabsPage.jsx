import React from 'react';
import Header from './Header';

const ProjectCard = ({ title, description, image, link }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="text-indigo-600 font-semibold hover:underline">Explore Project</a>
    </div>
  </div>
);

const LabsPage = () => {
  const projects = [
    {
      title: "Interactive Data Visualization",
      description: "A React component for visualizing complex data sets with interactive features.",
      image: "/images/data-viz.jpg",
      link: "/Emendatio/labs/data-viz"
    },
    {
        title: "ML Dashboards",
        description: "ML Driven.... ",
        image: "/images/ml-dashboards.jpg",
        link: "/Emendatio/labs/ml-dashboard"
      },
    {
      title: "VR Office Tour",
      description: "A virtual reality experience showcasing our innovative office space.",
      image: "/images/vr-office.jpg",
      link: "/labs/vr-office"
    },
    {
      title: "AI-Powered Chatbot",
      description: "An advanced chatbot using natural language processing for customer support.",
      image: "/images/chatbot.jpg",
      link: "/labs/chatbot"
    },
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Emendatio Labs</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Welcome to our innovation hub. Explore cutting-edge projects and experiments pushing the boundaries of technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default LabsPage;