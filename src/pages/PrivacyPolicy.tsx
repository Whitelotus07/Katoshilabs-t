// src/pages/PrivacyPolicy.tsx
import React from 'react';
import BinaryBackground from '../components/BinaryBackground';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <BinaryBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold text-white mb-8 animate-text-glow">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">Last updated: March 15, 2024</p>
            
            <div className="space-y-6 text-gray-300">
              <section className="bg-space-gray p-8 rounded-lg shadow-neon mb-6">
                <h2 className="text-2xl font-semibold text-neon-blue mb-4">1. Information We Collect</h2>
                <p className="mb-4">We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information</li>
                  <li>Account credentials</li>
                  <li>Payment information</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section className="bg-space-gray p-8 rounded-lg shadow-neon mb-6">
                <h2 className="text-2xl font-semibold text-neon-blue mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and maintain our services</li>
                  <li>Process your transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Communicate with you about products, services, and events</li>
                </ul>
              </section>

              <section className="bg-space-gray p-8 rounded-lg shadow-neon mb-6">
                <h2 className="text-2xl font-semibold text-neon-blue mb-4">3. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, or destruction.
                  Our security practices include:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security assessments</li>
                  <li>Access controls and authentication</li>
                  <li>Continuous monitoring and logging</li>
                </ul>
              </section>

              <section className="bg-space-gray p-8 rounded-lg shadow-neon mb-6">
                <h2 className="text-2xl font-semibold text-neon-blue mb-4">4. Your Rights</h2>
                <p className="mb-4">Under applicable data protection laws, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to our use of your data</li>
                  <li>Restrict processing of your data</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section className="bg-space-gray p-8 rounded-lg shadow-neon mb-6">
                <h2 className="text-2xl font-semibold text-neon-blue mb-4">5. Cookies and Tracking</h2>
                <p className="mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website.
                  These technologies help us:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences</li>
                  <li>Analyze website traffic</li>
                  <li>Personalize content</li>
                  <li>Improve our services</li>
                </ul>
              </section>

              <section className="bg-space-gray p-8 rounded-lg shadow-neon mb-6">
                <h2 className="text-2xl font-semibold text-neon-blue mb-4">6. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p>Email: <a href="mailto:privacy@katoshilabs.com" className="text-neon-blue hover:text-white">privacy@katoshilabs.com</a></p>
                  <p>Phone: <a href="tel:+2349050409056" className="text-neon-blue hover:text-white">+234 905 040 9056</a></p>
                  <p>Address: Nsikak Eduok, Uyo</p>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
