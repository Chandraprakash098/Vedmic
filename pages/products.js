import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useState, useEffect } from 'react';

// Mock data for demonstration
const mockProducts = [
  {
    id: 1,
    name: "AI Analytics Dashboard",
    description: "Transform your business data into actionable insights with our cutting-edge AI-powered analytics platform featuring real-time monitoring and predictive analytics.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    category: "analytics",
    features: ["Real-time Data", "AI Insights", "Custom Reports"],
    slug: "ai-analytics-dashboard"
  },
  {
    id: 2,
    name: "Cloud Security Suite",
    description: "Comprehensive cloud security solution with advanced threat detection, automated response systems, and enterprise-grade protection for your digital assets.",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
    category: "security",
    features: ["Threat Detection", "Auto Response", "24/7 Monitoring"],
    slug: "cloud-security-suite"
  },
  
  {
    id: 4,
    name: "E-commerce Platform",
    description: "Complete e-commerce solution with integrated payment processing, inventory management, and marketing tools to grow your online business.",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    category: "ecommerce",
    features: ["Payment Gateway", "Inventory", "Marketing Tools"],
    slug: "ecommerce-platform"
  },
  
  
];

function ProductCard({ product, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="group relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 rounded-3xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-700 overflow-hidden transform hover:-translate-y-3 hover:scale-[1.02] border border-slate-700/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animation: `fadeInUp 0.8s ease-out ${index * 0.15}s forwards`,
        opacity: 0
      }}
    >
      {/* Animated Border Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-0.5 animate-pulse">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 rounded-3xl h-full w-full"></div>
      </div>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`,
              animationPlayState: isHovered ? 'running' : 'paused'
            }}
          />
        ))}
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-blue-900/95 rounded-3xl h-full flex flex-col backdrop-blur-sm">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-3xl">
          <div className="relative h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-blue-600/20 to-orange-600/20">
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-full object-cover transition-all duration-700 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              } group-hover:scale-110`}
              onLoad={() => setImageLoaded(true)}
            />
            
            {/* Overlay with Mesh Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-orange-600/30 opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
            
            {/* Price Badge with Glow */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-600 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-2xl transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 border border-orange-400/30">
              <span className="text-sm font-bold text-white drop-shadow-lg">
                ${product.price.toFixed(2)}
              </span>
            </div>
            
            {/* Category Tag */}
            <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-700 backdrop-blur-sm rounded-2xl px-3 py-1.5 shadow-lg transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 border border-blue-400/30">
              <span className="text-xs font-medium text-white uppercase tracking-wider">
                {product.category}
              </span>
            </div>
            
            {/* Loading Shimmer */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 animate-pulse"></div>
            )}
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Product Name */}
          <h2 className="text-xl lg:text-2xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
            {product.name}
          </h2>
          
          {/* Description */}
          <p className="text-slate-300 mb-6 leading-relaxed flex-1 text-sm lg:text-base line-clamp-3">
            {product.description}
          </p>
          
          {/* Features Tags */}
          {product.features && product.features.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {product.features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gradient-to-r from-blue-600/30 to-orange-600/30 text-blue-200 text-xs font-medium rounded-full border border-blue-400/30 backdrop-blur-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}
          
          {/* Action Button */}
          <button className="group/btn relative w-full inline-flex items-center justify-center px-6 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-bold rounded-2xl hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 overflow-hidden border border-orange-400/30">
            <span className="relative z-10 flex items-center">
              Explore Product
              <svg 
                className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl opacity-0 group-hover/btn:opacity-30 transition-opacity duration-300"></div>
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Get unique categories from products
  const categories = ['all', ...new Set(mockProducts.map(product => product.category).filter(Boolean))];

  // Filter products based on category and search
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let filtered = mockProducts;

      if (activeFilter !== 'all') {
        filtered = filtered.filter(product => product.category === activeFilter);
      }

      if (searchQuery) {
        filtered = filtered.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 mt-12">
      <Header/>
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400 bg-clip-text text-transparent leading-tight">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Discover our comprehensive suite of <span className="text-orange-400 font-semibold">innovative software solutions</span> designed to transform your business operations and drive <span className="text-blue-400 font-semibold">unprecedented growth</span>.
            </p>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { value: `${mockProducts.length}+`, label: 'Products', icon: '🚀' },
                { value: '500+', label: 'Happy Clients', icon: '👥' },
                { value: '99.9%', label: 'Uptime', icon: '⚡' },
                { value: '24/7', label: 'Support', icon: '💬' }
              ].map((stat, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800/80 to-blue-900/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:scale-105">
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-black text-orange-400 mb-2 group-hover:text-orange-300 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          {/* Enhanced Filter and Search Controls */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
              {/* Search Bar */}
              <div className="w-full lg:w-96 relative">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 pl-14 bg-gradient-to-r from-slate-800/80 to-blue-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 shadow-2xl"
                  />
                  <svg className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Enhanced Category Filters */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 capitalize border shadow-lg ${
                      activeFilter === category
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-400/30 shadow-orange-500/50 scale-105'
                        : 'bg-gradient-to-r from-slate-800/80 to-blue-900/80 backdrop-blur-sm text-slate-300 border-slate-700/50 hover:border-orange-500/50 hover:text-orange-400'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-10">
            <p className="text-slate-300 text-lg">
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-orange-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-orange-400 font-semibold">Searching...</span>
                </span>
              ) : (
                <>
                  Showing <span className="text-orange-400 font-bold">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
                </>
              )}
            </p>
          </div>

          {/* Products Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 rounded-3xl shadow-2xl overflow-hidden animate-pulse">
                  <div className="h-64 bg-slate-700/50"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-slate-700/50 rounded"></div>
                    <div className="h-4 bg-slate-700/50 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-700/50 rounded w-1/2"></div>
                    <div className="h-12 bg-slate-700/50 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="mb-8">
                <svg className="mx-auto h-32 w-32 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No products found</h3>
              <p className="text-slate-300 mb-8 text-lg">
                {searchQuery ? (
                  <>No products match <span className="text-orange-400 font-semibold">"{searchQuery}"</span></>
                ) : (
                  'No products available in this category'
                )}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('all');
                }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105"
              >
                Show All Products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-blue-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get started with our innovative solutions today and experience the difference quality makes. Join thousands of satisfied customers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-10 py-5 bg-white text-orange-600 font-bold rounded-2xl hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/20">
              <span className="flex items-center justify-center">
                Get Started Now
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="px-10 py-5 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Learn More
            </button>
          </div>
          
        </div>
        
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(249,115,22,0.3) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      <Footer/>
    </div>
  );
}