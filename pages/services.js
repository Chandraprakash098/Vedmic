import Header from '@/components/Header';
import { useState, useEffect } from 'react';
import Footer from './../components/Footer';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like Next.js and React.",
      features: ["Custom Web Applications", "E-commerce Solutions", "Progressive Web Apps", "API Integration"],
      technologies: ["React", "Next.js", "Node.js", "TypeScript"]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile Development",
      description: "Native and cross-platform apps for iOS and Android.",
      features: ["Native iOS & Android Apps", "Cross-platform Solutions", "App Store Optimization", "Push Notifications"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure with AWS, Azure, and CI/CD pipelines.",
      features: ["Cloud Architecture", "DevOps Implementation", "Automated Deployment", "Infrastructure as Code"],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes"]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "AI & Machine Learning",
      description: "Intelligent solutions powered by artificial intelligence and machine learning.",
      features: ["AI Model Development", "Data Analytics", "Natural Language Processing", "Computer Vision"],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Python"]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Database Solutions",
      description: "Robust database design and management for optimal performance.",
      features: ["Database Design", "Performance Optimization", "Data Migration", "Backup & Recovery"],
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"],
      technologies: ["SSL/TLS", "OAuth", "JWT", "OWASP"]
    }
  ];

  const processes = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Our team creates intuitive designs and scalable system architecture.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using best practices and rigorous testing.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing maintenance and support.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "99%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header/>
      <div className="pt-20 md:pt-24 lg:pt-28"></div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-orange-500">Services</span>
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Comprehensive software development services designed to transform your business with cutting-edge technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
                <div className={`text-3xl md:text-4xl font-bold ${index % 3 === 0 ? 'text-blue-900' : index % 3 === 1 ? 'text-orange-500' : 'text-gray-900'} mb-2`}>{stat.number}</div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end technology solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${index % 3 === 0 ? 'bg-blue-100 text-blue-900' : index % 3 === 1 ? 'bg-orange-100 text-orange-500' : 'bg-gray-100 text-gray-900'}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-600 text-sm">
                        <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${index % 3 === 0 ? 'bg-blue-900' : index % 3 === 1 ? 'bg-orange-500' : 'bg-gray-900'}`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 rounded-full text-xs font-medium ${index % 3 === 0 ? 'bg-blue-50 text-blue-900' : index % 3 === 1 ? 'bg-orange-50 text-orange-600' : 'bg-gray-100 text-gray-800'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Methodology</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven process that ensures successful project delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-900 to-orange-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full border border-gray-100">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${index % 3 === 0 ? 'bg-blue-100 text-blue-900' : index % 3 === 1 ? 'bg-orange-100 text-orange-500' : 'bg-gray-100 text-gray-900'}`}>
                    {process.icon}
                  </div>
                  <div className="text-sm font-bold text-blue-900 mb-2">STEP {process.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why Partner With Us?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Expert Team",
                    description: "Our skilled developers and designers have years of experience in cutting-edge technologies."
                  },
                  {
                    title: "Agile Methodology",
                    description: "We follow agile development practices to ensure fast delivery and continuous improvement."
                  },
                  {
                    title: "24/7 Support",
                    description: "Our dedicated support team is available round the clock to assist you."
                  },
                  {
                    title: "Cost-Effective",
                    description: "We deliver high-quality solutions at competitive prices without compromising on quality."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${index % 3 === 0 ? 'bg-blue-100 text-blue-900' : index % 3 === 1 ? 'bg-orange-100 text-orange-500' : 'bg-gray-100 text-gray-900'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Let's discuss your project requirements and create something amazing together.
              </p>
              <div className="space-y-4">
                {[
                  "Free consultation",
                  "Project proposal within 24 hours",
                  "Dedicated project manager",
                  "Flexible engagement models"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a href="/contact" className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors w-full">
                Contact Us
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Let's Build Something Great Together</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with our expert development services?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/portfolio" className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}