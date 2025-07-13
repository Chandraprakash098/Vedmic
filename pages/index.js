import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: (
        <svg className="w-14 h-14 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Web Development",
      description: "Cutting-edge web applications with modern frameworks and stunning user experiences that convert visitors into customers.",
      features: ["React & Next.js", "TypeScript", "Responsive Design", "SEO Optimized"],
      gradient: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      icon: (
        <svg className="w-14 h-14 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions that deliver exceptional performance and user engagement across all devices.",
      features: ["React Native", "Flutter", "iOS & Android", "App Store Deploy"],
      gradient: "from-violet-400 to-purple-500",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200"
    },
    {
      icon: (
        <svg className="w-14 h-14 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps services that grow with your business and ensure maximum uptime.",
      features: ["AWS & Azure", "DevOps", "CI/CD Pipeline", "Auto Scaling"],
      gradient: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: "📊", color: "from-emerald-500 to-teal-500" },
    { number: "100+", label: "Happy Clients", icon: "😊", color: "from-violet-500 to-purple-500" },
    { number: "5+", label: "Years Experience", icon: "🏆", color: "from-orange-500 to-red-500" },
    { number: "24/7", label: "Support Available", icon: "🚀", color: "from-pink-500 to-rose-500" }
  ];

  return (
    <Layout
      title="Vedamic - Innovation at Its Best"
      description="Vedamic provides cutting-edge software development services to help your business thrive in the digital age."
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 bg-blue-900">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900">
          <div className="absolute inset-0 bg-[url(`data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`)] opacity-40"></div>
        </div>
        
        {/* Animated Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-violet-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-rose-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '6s' }}></div>
        </div>

        {/* Interactive Mouse Follower */}
        <div 
          className="absolute w-6 h-6 bg-amber-400 rounded-full pointer-events-none opacity-30 blur-sm transition-all duration-300"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            transform: 'translate(-50%, -50%)'
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-400/30">
                  🚀 Welcome to the Future
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                <span className="block">Innovate with</span>
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse">
                  Vedamic
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                Transform your business with our cutting-edge software solutions and unlock unlimited digital potential that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Link href="/contact" className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold text-lg rounded-full hover:from-amber-600 hover:via-orange-600 hover:to-red-600 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25">
                  <span className="relative z-10">Get Started Today</span>
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </Link>
                <Link href="/portfolio" className="group inline-flex items-center px-10 py-5 border-2 border-amber-300 text-amber-100 font-bold text-lg rounded-full hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 backdrop-blur-sm">
                  View Our Work
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-slate-200 opacity-90">
                <div className="text-center">
                  <div className="text-2xl font-bold">⭐ 4.9/5</div>
                  <div className="text-sm">Client Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">🏆 Award</div>
                  <div className="text-sm">Winning Team</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">🚀 Fast</div>
                  <div className="text-sm">Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-amber-300 animate-bounce">
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-amber-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-amber-300 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>{stat.number}</div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-4">
              Our Expertise
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We deliver comprehensive digital solutions that drive growth and innovation for businesses of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`group relative ${service.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 ${service.borderColor} border-2 overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <div className={`w-5 h-5 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mr-3`}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services" className={`group/link inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url(`data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E`)] opacity-20"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              Ready to Start?
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of satisfied clients who have revolutionized their digital presence with Vedamic Solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg rounded-full hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-2xl">
                <span className="relative z-10">Start Your Project</span>
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/about" className="group inline-flex items-center px-10 py-5 border-2 border-gray-300 text-gray-300 font-bold text-lg rounded-full hover:bg-gray-300 hover:text-gray-900 transition-all duration-300 backdrop-blur-sm">
                Learn About Us
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-4">
                Why Choose Us?
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Why Choose Vedamic?
              </h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Lightning Fast Development</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">We deliver high-quality solutions in record time without compromising on quality or performance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Quality Guaranteed</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">Every project undergoes rigorous testing and quality assurance processes to ensure perfection.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">24/7 Support</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">Round-the-clock technical support and maintenance for your complete peace of mind.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 via-slate-700 to-gray-800 rounded-3xl p-10 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-3xl font-bold mb-4">Ready to Get Started?</h4>
                  <p className="text-gray-300 mb-8 text-lg">Let's discuss your project and bring your vision to life with our expert team.</p>
                  <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Contact Us Today
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}