import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 mb-6">
          Last updated: March 15, 2024
        </p>
        <div className="space-y-6 text-gray-300">
          <p>
            Your privacy is important to us. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website.
          </p>
          {/* Add more privacy policy content here */}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;