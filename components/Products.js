// import Image from 'next/image';
// import Link from 'next/link';

// export default function ProductCard({ product }) {
//   return (
//     <div className="bg-white shadow-md rounded-lg overflow-hidden">
//       <Image
//         src={product.image}
//         alt={product.name}
//         width={400}
//         height={300}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-6">
//         <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//         <p className="text-gray-600 mb-4">{product.description}</p>
//         <p className="text-lg font-bold mb-4">${product.price.toFixed(2)}</p>
//         <Link
//           href={`/products/${product.slug}`}
//           className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Learn More
//         </Link>
//       </div>
//     </div>
//   );
// }


import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl p-0.5">
        <div className="bg-white rounded-2xl h-full w-full"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 bg-white rounded-2xl h-full flex flex-col">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <div className="relative h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-orange-50 to-orange-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`object-cover transition-all duration-700 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              } group-hover:scale-110`}
              onLoad={() => setImageLoaded(true)}
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Price Badge */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
              <span className="text-sm font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                ${product.price.toFixed(2)}
              </span>
            </div>
            
            {/* Loading Shimmer */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 animate-pulse"></div>
            )}
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Product Name */}
          <h2 className="text-xl lg:text-2xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
            {product.name}
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed flex-1 text-sm lg:text-base line-clamp-3">
            {product.description}
          </p>
          
          {/* Bottom Section */}
          <div className="mt-auto">
            {/* Features/Tags (if available) */}
            {product.features && product.features.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {product.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-full border border-orange-200"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}
            
            {/* Action Button */}
            <Link
              href={`/products/${product.slug}`}
              className="group/btn relative w-full inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:via-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-200 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Learn More
                <svg 
                  className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating Action Button (Mobile) */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:hidden">
        <Link
          href={`/products/${product.slug}`}
          className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-orange-200 transform hover:scale-110 transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}