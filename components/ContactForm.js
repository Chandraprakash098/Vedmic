import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Interactive Mouse Follower */}
      <div 
        className="absolute pointer-events-none z-10 w-96 h-96 bg-gradient-radial from-purple-400/20 to-transparent rounded-full blur-3xl transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <main className={`relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Left Side - Enhanced Info */}
        <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
          <div className="space-y-4 lg:space-y-6">
            <div className="inline-block px-3 py-2 sm:px-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
              <span className="text-xs sm:text-sm font-medium text-purple-300">✨ Let's Connect</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
              Let's Build Something
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Transform your vision into reality with our expert team. We're not just service providers – we're your partners in innovation.
            </p>
          </div>

          {/* Enhanced Feature List */}
          <div className="space-y-3 lg:space-y-4">
            {[
              { icon: "⚡", text: "Lightning-fast responses within 24 hours" },
              { icon: "🚀", text: "Connect with sales, support, or tech experts" },
              { icon: "🎯", text: "Tailored solutions for your unique needs" },
              { icon: "🔒", text: "Enterprise-grade security & privacy" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 lg:space-x-4 p-3 lg:p-4 rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg lg:rounded-xl flex items-center justify-center text-white font-bold text-sm lg:text-base">
                  {item.icon}
                </div>
                <p className="text-gray-300 font-medium text-sm lg:text-base">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6 pt-6 lg:pt-8">
            <div className="text-center p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1 lg:mb-2">50+</div>
              <div className="text-purple-300 text-xs lg:text-sm">Projects Delivered</div>
            </div>
            <div className="text-center p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 backdrop-blur-sm">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1 lg:mb-2">98%</div>
              <div className="text-blue-300 text-xs lg:text-sm">Client Satisfaction</div>
            </div>
          </div>

          <div className="pt-6 lg:pt-8">
            <p className="text-xs sm:text-sm text-gray-400">
              © {new Date().getFullYear()} Vedamic PVT LTD. Crafting digital excellence.
            </p>
          </div>
        </div>

        {/* Right Side - Enhanced Form */}
        <div className="w-full order-1 lg:order-2">
          <ContactForm />
        </div>
      </main>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    companyName: '',
    phone: '',
    inquiryType: 'General Inquiry',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const inquiryOptions = [
    'General Inquiry',
    'Sales & Partnership',
    'Technical Support',
    'Custom Development',
    'Consultation',
    'Other'
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setStatus({ type: 'success', message: 'Message sent successfully! We\'ll be in touch soon.' });
    setFormData({
      name: '',
      email: '',
      message: '',
      companyName: '',
      phone: '',
      inquiryType: 'General Inquiry',
    });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="relative">
      {/* Glassmorphism Container */}
      <div className="relative p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
        {/* Form Header */}
        <div className="text-center mb-6 lg:mb-8">
          <div className="inline-block p-2 lg:p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl lg:rounded-2xl mb-3 lg:mb-4">
            <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Get in Touch</h2>
          <p className="text-sm lg:text-base text-gray-300">Ready to start your next project? Let's make it happen together.</p>
        </div>

        {/* Status Message */}
        {status.message && (
          <div className={`mb-4 lg:mb-6 p-3 lg:p-4 rounded-xl lg:rounded-2xl text-center font-medium text-sm lg:text-base ${
            status.type === 'success' 
              ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
              : 'bg-red-500/20 text-red-300 border border-red-500/30'
          }`}>
            {status.message}
          </div>
        )}

        <div className="space-y-4 lg:space-y-6">
          {/* Inquiry Type */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">Purpose of Inquiry</label>
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-3 py-2.5 lg:px-4 lg:py-3 rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
            >
              {inquiryOptions.map((type) => (
                <option key={type} value={type} className="bg-slate-800 text-white">{type}</option>
              ))}
            </select>
          </div>

          {/* Name & Email Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField('')}
                placeholder="John Doe"
                className={`w-full px-3 py-2.5 lg:px-4 lg:py-3 rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-sm border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm lg:text-base ${
                  errors.name ? 'border-red-500' : 'border-white/20'
                } ${focusedField === 'name' ? 'bg-white/10' : ''}`}
              />
              {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField('')}
                placeholder="john@example.com"
                className={`w-full px-3 py-2.5 lg:px-4 lg:py-3 rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-sm border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm lg:text-base ${
                  errors.email ? 'border-red-500' : 'border-white/20'
                } ${focusedField === 'email' ? 'bg-white/10' : ''}`}
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
            </div>
          </div>

          {/* Company & Phone Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                onFocus={() => setFocusedField('company')}
                onBlur={() => setFocusedField('')}
                placeholder="Acme Inc."
                className={`w-full px-3 py-2.5 lg:px-4 lg:py-3 rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm lg:text-base ${
                  focusedField === 'company' ? 'bg-white/10' : ''
                }`}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField('')}
                placeholder="+1 (555) 123-4567"
                className={`w-full px-3 py-2.5 lg:px-4 lg:py-3 rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm lg:text-base ${
                  focusedField === 'phone' ? 'bg-white/10' : ''
                }`}
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Your Message <span className="text-red-400">*</span>
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField('')}
              placeholder="Tell us about your project, goals, or how we can help you..."
              className={`w-full px-3 py-2.5 lg:px-4 lg:py-3 rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-sm border text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none text-sm lg:text-base ${
                errors.message ? 'border-red-500' : 'border-white/20'
              } ${focusedField === 'message' ? 'bg-white/10' : ''}`}
            ></textarea>
            {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit}
            className={`w-full py-3 lg:py-4 px-4 lg:px-6 rounded-xl lg:rounded-2xl font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent text-sm lg:text-base ${
              isSubmitting 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-purple-500/25'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center space-x-2">
                <svg className="animate-spin h-4 w-4 lg:h-5 lg:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sending Your Message...</span>
              </span>
            ) : (
              <span className="flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </span>
            )}
          </button>

          {/* Footer */}
          <div className="text-center pt-3 lg:pt-4">
            <p className="text-xs lg:text-sm text-gray-400">
              🔒 Your information is secure and will never be shared
            </p>
          </div>
        </div>
      </div>
    </div>
        
  );
}
