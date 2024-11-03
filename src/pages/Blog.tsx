// src/pages/Blog.tsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import BinaryBackground from '../components/BinaryBackground';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'The Evolution of AI Music Generation',
    excerpt: 'Discover how artificial intelligence is revolutionizing music creation, from simple melodies to complex orchestral compositions. Learn about the latest advancements in AI-powered music generation and what it means for the future of the music industry.',
    date: 'March 15, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04',
    category: 'Technology',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Building Scalable Music Distribution Systems',
    excerpt: 'An in-depth look at modern music distribution architecture, exploring how cloud technology and microservices are transforming the way music reaches audiences. Learn about the technical challenges and solutions in building robust music platforms.',
    date: 'March 10, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
    category: 'Engineering',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'The Future of Music Royalties in Web3',
    excerpt: 'Exploring how blockchain technology and smart contracts are revolutionizing music royalty distribution. Discover how decentralized systems are creating new opportunities for artists and transforming the music industry.',
    date: 'March 5, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745',
    category: 'Industry',
    readTime: '6 min read'
  },
];

const Blog: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <BinaryBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto px-6 py-24">
            <header className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6 animate-text-glow">
                Insights & Innovation
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore the latest trends, technologies, and insights in AI, music technology, and software development.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-space-gray rounded-lg overflow-hidden shadow-neon hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-56 object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-neon-blue text-deep-space px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <time>{post.date}</time>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-semibold text-white mb-4 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <button className="group flex items-center text-neon-blue hover:text-white transition-colors">
                      Read More 
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
