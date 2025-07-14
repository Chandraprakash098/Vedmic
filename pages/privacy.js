import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo.png';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Decorative background elements */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-600 to-yellow-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Header */}
      <Header/>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mt-15 mb-6">
              Privacy Policy
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="mt-6 text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Information We Collect */}
            <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Information We Collect
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>We collect information you provide directly to us, such as when you:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fill out forms on our website</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us via email or phone</li>
                  <li>Request our services or products</li>
                  <li>Create an account or profile</li>
                </ul>
                <p>This information may include your name, email address, phone number, company details, and any other information you choose to provide.</p>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Send you marketing and promotional communications</li>
                  <li>Monitor and analyze trends and usage</li>
                  <li>Detect and prevent fraudulent activities</li>
                </ul>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                Information Sharing
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service providers who assist us in operating our website and conducting business</li>
                  <li>Legal requirements or to protect our rights and safety</li>
                  <li>Business transfers in the event of a merger or acquisition</li>
                  <li>With your explicit consent for specific purposes</li>
                </ul>
                <p>All third parties are required to maintain the confidentiality of your information and use it only for the specified purposes.</p>
              </div>
            </section>

            {/* Data Security */}
            <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                Data Security
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                <p>These measures include:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                  <li>Secure data storage and backup systems</li>
                </ul>
              </div>
            </section>

            {/* Your Rights */}
            <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                Your Rights
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Update or correct your information</li>
                  <li>Delete your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request data portability</li>
                  <li>Object to processing of your information</li>
                </ul>
                <p>To exercise these rights, please contact us at <a href="mailto:privacy@vedamic.com" className="text-orange-400 hover:text-orange-300 transition-colors duration-300">privacy@vedamic.com</a></p>
              </div>
            </section>

            
          </div>
          
        </div>
      </main>
      <Footer/>
    </div>
  );
}