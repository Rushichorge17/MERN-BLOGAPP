import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">At JourneyJot, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our blog app.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">Information We Collect</h2>
        <p className="mb-4">We may collect personal information, such as your name and email address, when you sign up for an account or submit a comment on our blog posts. Additionally, we may collect non-personal information, such as your IP address and browser type, for analytics purposes.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">How We Use Your Information</h2>
        <p className="mb-4">We may use your personal information to:</p>
        <ul className="list-disc ml-8 mb-4">
          <li>Provide and personalize our services</li>
          <li>Communicate with you about our services and updates</li>
          <li>Monitor and analyze usage of our services</li>
          <li>Protect the security and integrity of our platform</li>
        </ul>

        <h2 className="text-xl font-bold mt-6 mb-2">Information Sharing</h2>
        <p className="mb-4">We will not sell, rent, or share your personal information with third parties, except as described in this Privacy Policy or with your consent.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">Data Security</h2>
        <p className="mb-4">We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">Changes to This Privacy Policy</h2>
        <p className="mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

        <h2 className="text-xl font-bold mt-6 mb-2">Contact Us</h2>
        <p className="mb-4">If you have any questions or concerns about this Privacy Policy, please contact us at contact@journeyjot.com.</p>
      </div>
    </div>
  );
}
