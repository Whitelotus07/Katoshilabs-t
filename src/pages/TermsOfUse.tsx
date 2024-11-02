import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8 text-white">Terms of Use</h1>
      <div className="prose prose-invert max-w-none">
        <p className="text-gray-300 mb-6">
          Last updated: March 15, 2024
        </p>
        <div className="space-y-6 text-gray-300">
          <p>
            By accessing and using this website, you accept and agree to be bound by the
            terms and provision of this agreement.
          </p>
          {/* Add more terms of use content here */}
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;