import React from 'react';
import Header from './Header';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">About Emendatio</h1>
        <div className="max-w-3xl mx-auto">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Emendatio was founded in [year] with a vision to transform how businesses leverage technology. 
              Our journey began with a simple idea: to make cutting-edge tech solutions accessible and 
              effective for businesses of all sizes.
            </p>
            <p className="text-gray-600">
              Since then, we've grown into a team of passionate experts, dedicated to driving innovation 
              and efficiency for our clients across various industries.
            </p>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              At Emendatio, our mission is to empower businesses through technology. We strive to deliver 
              innovative, scalable, and cost-effective solutions that drive real business value. Our 
              commitment to excellence and continuous learning ensures that we're always at the forefront 
              of technological advancements.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-600 mb-4">
              Our strength lies in our diverse team of technology experts, each bringing unique skills and 
              perspectives to the table. From cloud architects to AI specialists, our team is united by a 
              shared passion for solving complex problems and delivering exceptional results.
            </p>
            <p className="text-gray-600">
              Led by our founder [Founder Name], we foster a culture of innovation, collaboration, and 
              continuous improvement.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;