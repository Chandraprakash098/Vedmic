import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo.png';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Decorative background elements */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-600 to-yellow-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <Header/>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mt-15 mb-6">
              Terms of Service
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Please read these terms carefully before using our services. By accessing our website and services, you agree to be bound by these terms.
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
            {/* Acceptance of Terms */}
            <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Acceptance of Terms
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>By accessing and using the Vedamic Private Limited website and services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                <p>If you do not agree to abide by the above, please do not use this service. We reserve the right to change these terms at any time without prior notice.</p>
              </div>
            </section>

            {/* Services Description */}
            <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                  </svg>
                </div>
                Services Description
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>Vedamic Private Limited provides the following services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Web Development and Design</li>
                  <li>Mobile Application Development</li>
                  <li>UI/UX Design Services</li>
                  <li>Cloud Solutions and Integration</li>
                  <li>Digital Marketing Services</li>
                  <li>Technology Consulting</li>
                  <li>Software Development and Maintenance</li>
                </ul>
                <p>We reserve the right to modify, suspend, or discontinue any service at any time without notice.</p>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                User Responsibilities
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>By using our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not engage in any activity that disrupts our services</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not transmit malicious code or harmful content</li>
                </ul>
                <p>Failure to comply with these responsibilities may result in termination of services.</p>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                Intellectual Property
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>All content, features, and functionality of our website and services are owned by Vedamic Private Limited and are protected by international copyright, trademark, and other intellectual property laws.</p>
                <p>Unless otherwise specified in a separate agreement:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Client retains ownership of content they provide</li>
                  <li>We retain ownership of our methodologies and frameworks</li>
                  <li>Custom solutions ownership will be defined in project agreements</li>
                  <li>You may not reproduce, distribute, or create derivative works without permission</li>
                </ul>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                Payment Terms
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>Payment terms for our services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment terms will be specified in individual project agreements</li>
                  <li>Invoices are due within 30 days of issue unless otherwise specified</li>
                  <li>Late payments may incur additional charges</li>
                  <li>We accept various payment methods including bank transfers and digital payments</li>
                  <li>All prices are in Indian Rupees (INR) unless otherwise stated</li>
                  <li>Refunds will be processed according to our refund policy</li>
                </ul>
                <p>Services may be suspended for non-payment after appropriate notice.</p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                Limitation of Liability
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>To the fullest extent permitted by law:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We provide services "as is" without warranties of any kind</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>Our total liability is limited to the amount paid for the specific service</li>
                  <li>We are not responsible for third-party services or integrations</li>
                  <li>Users are responsible for backing up their data</li>
                  <li>We do not guarantee uninterrupted or error-free services</li>
                </ul>
                <p>Some jurisdictions may not allow certain limitations, so these may not apply to you.</p>
              </div>
            </section>

            {/* Termination */}
            <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L12 12m6.364 6.364L12 12m0 0L5.636 5.636M12 12l6.364-6.364M12 12l-6.364 6.364" />
                  </svg>
                </div>
                Termination
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>Either party may terminate services under the following conditions:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With 30 days written notice for ongoing services</li>
                  <li>Immediately for breach of these terms</li>
                  <li>For non-payment after appropriate notice</li>
                  <li>Upon completion of project-based services</li>
                  <li>For violation of applicable laws or regulations</li>
                </ul>
                <p>Upon termination, you must cease using our services and we may delete your data according to our data retention policy.</p>
              </div>
            </section>

            {/* Governing Law */}
            <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                Governing Law
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
                <p>Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in Bihar, India.</p>
                <p>Both parties consent to the jurisdiction and venue of such courts.</p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="bg-gray-800/50 rounded-xl p-8 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                Changes to Terms
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>We reserve the right to modify these terms at any time. When we do:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We will update the "last updated" date at the top of this page</li>
                  <li>We will notify you of significant changes via email or website notice</li>
                  <li>Continued use of our services constitutes acceptance of the modified terms</li>
                  <li>You may terminate services if you do not agree to the changes</li>
                </ul>
                <p>We encourage you to review these terms periodically for any updates.</p>
              </div>
            </section>

            

            {/* Disclaimer */}
            <section className="bg-yellow-900/20 rounded-xl p-8 border border-yellow-500/20">
              <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                Important Disclaimer
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>These terms constitute the entire agreement between you and Vedamic Private Limited regarding the use of our services. If any provision is found to be unenforceable, the remaining provisions will remain in full force and effect.</p>
                <p>By continuing to use our services, you acknowledge that you have read, understood, and agree to be bound by these terms.</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}