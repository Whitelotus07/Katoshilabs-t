// src/pages/TermsOfUse.tsx
import React from 'react';
import BinaryBackground from '../components/BinaryBackground';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const TermsOfUse: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <BinaryBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold text-white mb-8 animate-text-glow">Terms of Use</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">Last updated: March 15, 2024</p>
            
            <div className="space-y-6 text-gray-300">
              <section className="bg-space-gray p-8 rounded-lg shadow-neon mb-6">
                <h2 className="text-2xl font-semibold text-neon-blue mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing or using Katoshi Labs services, you agree to be bound by these Terms of Use. 
                  If you disagree with any part of these terms, you may not access our services.
                </p>
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of any changes by updating 
                  the "Last updated" date of these terms.
                </p>
              </section>

              <section className="bg-space-gray p-8 rounded-lg shadow-neon mb-6">
                <h2 className="text-2xl font-semibold text-neon-blue mb-4">2. Intellectual Property Rights</h2>
                <p className="mb-4">
                  Our services and all content, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Software code</li>
                  <li>Algorithms</li>
                  <li>User interface designs</li>
                  <li>Text and graphics</li>
                  <li>Audio and visual elements</li>
                </ul>
                <p>
                  Are the property of Katoshi Labs or our licensors and are protected by intellectual property laws.
                </p>
              </section>

              <section className="bg-space-gray p-8 rounded-lg shadow-neon mb-6">
                <h2 className="text-2xl font-semibold text-neon-blue mb-4">3. User Conduct</h2>
                <p className="mb-4">When using our services, you agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon intellectual property rights</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with service performance</li>
                  <li>Share harmful or malicious content</li>
                  <li>Impersonate others or provide false information</li>
                </ul>
              </section>

              <section className="bg-space-gray p-8 rounded-lg shadow-neon mb-6">
                <h2 className="text-2xl font-semibold text-neon-blue mb-4">4. Service Usage</h2>
                <p className="mb-4">
                  Our services are provided on an "as is" and "as available" basis. We reserve the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or discontinue any service without notice</li>
                  <li>Restrict service access for maintenance</li>
                  <li>Update features and functionality</li>
                  <li>Terminate accounts that violate these terms</li>
                </ul>
              </section>

              <section className="bg-space-gray p-8 rounded-lg shadow-neon mb-6">
                <h2 className="text-2xl font-semibold text-neon-blue mb-4">5. Limitation of Liability</h2>
                <p className="mb-4">
                  Katoshi Labs shall not be liable for any indirect, incidental, special, consequential, or 
                  punitive damages resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use or inability to use our services</li>
                  <li>Data loss or corruption</li>
                  <li>Service interruptions</li>
                  <li>Third-party actions</li>
                </ul>
              </section>

              <section className="bg-space-gray p-8 rounded-lg shadow-neon mb-6">
                <h2 className="text-2xl font-semibold text-neon-blue mb-4">6. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Nigeria, 
                  without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="bg-space-gray p-8 rounded-lg shadow-neon mb-6">
                <h2 className="text-2xl font-semibold text-neon-blue mb-4">7. Contact Information</h2>
                <p className="mb-4">
                  For any questions regarding these Terms of Use, please contact us:
                </p>
                <div className="space-y-2">
                  <p>Email: <a href="mailto:terms@katoshilabs.com" className="text-neon-blue hover:text-white">terms@katoshilabs.com</a></p>
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

export default TermsOfUse;
