import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import LabsPage from './components/LabsPage';
import BusinessDashboard from './components/labs/BusinessDashboard';
import MLInventoryDashboard from './components/labs/MLInventoryDashboard';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/labs" element={<LabsPage />} />
        <Route path="/labs/data-viz" element={<BusinessDashboard />} />
        <Route path="/labs/ml-dashboard" element={<MLInventoryDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;