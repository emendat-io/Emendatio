import React from 'react';
import Header from './Header';

const BlogPost = ({ title, excerpt, date, author }) => (
  <article className="bg-white p-6 rounded-lg shadow-md mb-8">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-500 mb-4">By {author} | {date}</p>
    <p className="text-gray-600 mb-4">{excerpt}</p>
    <a href="#" className="text-indigo-600 font-semibold hover:underline">Read more</a>
  </article>
);

const BlogPage = () => {
  const blogPosts = [
    {
      title: "5 Ways to Reduce Cloud Costs Without Sacrificing Performance",
      excerpt: "In this post, we explore strategies for optimizing your cloud infrastructure to minimize costs while maintaining high performance...",
      date: "June 15, 2023",
      author: "Jane Doe"
    },
    {
      title: "The Future of E-commerce: AI-Driven Personalization",
      excerpt: "Discover how artificial intelligence is revolutionizing the e-commerce landscape and how businesses can leverage AI for personalized customer experiences...",
      date: "May 28, 2023",
      author: "John Smith"
    },
    {
      title: "Demystifying FinOps: A Guide for Modern Businesses",
      excerpt: "Learn about the emerging practice of FinOps and how it can help your organization better manage and optimize cloud spending...",
      date: "May 10, 2023",
      author: "Emily Johnson"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Emendatio Blog</h1>
        <div className="max-w-3xl mx-auto">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;