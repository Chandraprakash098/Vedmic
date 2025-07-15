// import Link from "next/link";
// import Image from "next/image";
// import logo from "../public/images/logo2.png";

// export default function Footer() {
//   return (
//     <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
//       {/* Decorative background elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-600 to-yellow-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
//       </div>

//       {/* Main footer content */}
//       <div className="relative z-10 container mx-auto px-4 py-16">
        
        
//          <div className="text-center mb-12">
//           <div className="flex justify-center items-center mb-6">
//             <div className="w-32 h-28 rounded-xl overflow-hidden transform hover:scale-110 transition-all duration-300 shadow-lg">
//               <Image
//                 src={logo}
//                 alt="Vedamic Logo"
//                 className="object-contain w-full h-full"
//                 priority
//               />
//             </div>
//           </div>
//           <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
//             Vedamic Private Limited
//           </h2>
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
//             software solutions for the modern world. Building tomorrow's
//             technology today.
//           </p>
//         </div>
        


//         {/* Main footer grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
//           {/* Company Info */}
//           <div className="space-y-6">
//             <h3 className="text-xl font-bold text-orange-400 mb-6 relative">
//               About Us
//               <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
//             </h3>
//             <p className="text-gray-300 leading-relaxed">
//               We are passionate about creating cutting-edge solutions that drive
//               innovation and transform businesses worldwide.
//             </p>
//             <div className="flex space-x-4">
//               <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center border border-orange-500/30 hover:border-orange-400 transition-all duration-300 group cursor-pointer">
//                 <svg
//                   className="w-6 h-6 text-orange-400 group-hover:text-orange-300"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                 </svg>
//               </div>
//               <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center border border-orange-500/30 hover:border-orange-400 transition-all duration-300 group cursor-pointer">
//                 <svg
//                   className="w-6 h-6 text-orange-400 group-hover:text-orange-300"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                 </svg>
//               </div>
//               <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center border border-orange-500/30 hover:border-orange-400 transition-all duration-300 group cursor-pointer">
//                 <svg
//                   className="w-6 h-6 text-orange-400 group-hover:text-orange-300"
//                   fill="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                 </svg>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-6">
//             <h3 className="text-xl font-bold text-orange-400 mb-6 relative">
//               Quick Links
//               <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
//             </h3>
//             <ul className="space-y-3">
//               {[
//                 { href: "/", label: "Home" },
//                 { href: "/about", label: "About" },
//                 { href: "/services", label: "Services" },
//                 { href: "/products", label: "Products" },
//                 // { href: '/blog', label: 'Blog' },
//                 { href: "/contact", label: "Contact" },
//               ].map((link) => (
//                 <li key={link.href}>
//                   <Link
//                     href={link.href}
//                     className="text-gray-300 hover:text-orange-400 transition-all duration-300 flex items-center group"
//                   >
//                     <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></span>
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div className="space-y-6">
//             <h3 className="text-xl font-bold text-orange-400 mb-6 relative">
//               Services
//               <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
//             </h3>
//             <ul className="space-y-3">
//               {[
//                 "Web Development",
//                 "Mobile Apps",
//                 "UI/UX Design",
//                 "Cloud Solutions",
//                 "Digital Marketing",
//                 "Consulting",
//               ].map((service) => (
//                 <li key={service}>
//                   <span className="text-gray-300 hover:text-orange-400 transition-all duration-300 flex items-center group cursor-pointer">
//                     <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></span>
//                     {service}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-6">
//             <h3 className="text-xl font-bold text-orange-400 mb-6 relative">
//               Get in Touch
//               <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-500 to-red-500"></div>
//             </h3>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-3 group">
//                 <div className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center border border-orange-500/30 group-hover:border-orange-400 transition-all duration-300 flex-shrink-0">
//                   <svg
//                     className="w-5 h-5 text-orange-400"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-gray-300 leading-relaxed">
//                     Krishna Mahto, Anehha, Anchha, Aurangabad, Daudnagar
//                     <br />
//                     Bihar, India, 824143
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-3 group">
//                 <div className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center border border-orange-500/30 group-hover:border-orange-400 transition-all duration-300">
//                   <svg
//                     className="w-5 h-5 text-orange-400"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                     />
//                   </svg>
//                 </div>
//                 <a
//                   href="mailto:info@vedamic.com"
//                   className="text-gray-300 hover:text-orange-400 transition-all duration-300"
//                 >
//                   info@vedamic.com
//                 </a>
//               </div>

//               <div className="flex items-center space-x-3 group">
//                 <div className="w-10 h-10 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center border border-orange-500/30 group-hover:border-orange-400 transition-all duration-300">
//                   <svg
//                     className="w-5 h-5 text-orange-400"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                     />
//                   </svg>
//                 </div>
//                 <a
//                   href="tel:+91 7004262704"
//                   className="text-gray-300 hover:text-orange-400 transition-all duration-300"
//                 >
//                   +91 7004262704
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Newsletter Signup */}
//         <div className="mt-16 py-12 border-t border-gray-700/50">
//           <div className="max-w-2xl mx-auto text-center">
//             <h3 className="text-2xl font-bold text-orange-400 mb-4">
//               Stay Updated
//             </h3>
//             <p className="text-gray-300 mb-8">
//               Subscribe to our newsletter for the latest updates and insights.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-white placeholder-gray-400 transition-all duration-300"
//               />
//               <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="mt-12 pt-8 border-t border-gray-700/50">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
//               <p className="text-gray-400 text-sm">
//                 &copy; {new Date().getFullYear()} Vedamic Private Limited. All
//                 rights reserved.
//               </p>
//               <div className="flex items-center space-x-4 text-sm">
//                 <Link
//                   href="/privacy"
//                   className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
//                 >
//                   Privacy Policy
//                 </Link>
//                 <span className="text-gray-600">•</span>
//                 <Link
//                   href="/termservice"
//                   className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
//                 >
//                   Terms of Service
//                 </Link>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2 text-gray-400 text-sm">
//               <span>Made with</span>
//               <svg
//                 className="w-4 h-4 text-orange-500"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//               </svg>
//               <span>by Vedamic Team</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }




import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/logo2.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        
        {/* Logo and Company Info */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src={logo}
              alt="Vedamic Logo"
              width={120}
              height={80}
              className="object-contain"
              priority
            />
          </div>
          <h2 className="text-3xl font-bold text-orange-400 mb-4">
            Vedamic Private Limited
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            software solutions for the modern world. 
            Building tomorrow's technology today.
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              About Us
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              We are passionate about creating cutting-edge solutions that drive
              innovation and transform businesses worldwide.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Web Development</li>
              <li className="text-gray-300 text-sm">Mobile Apps</li>
              <li className="text-gray-300 text-sm">UI/UX Design</li>
              <li className="text-gray-300 text-sm">Cloud Solutions</li>
              <li className="text-gray-300 text-sm">Digital Marketing</li>
              <li className="text-gray-300 text-sm">Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <svg className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-300 text-sm">
                  Krishna Mahto, Anehha, Anchha, Aurangabad, Daudnagar<br />
                  Bihar, India, 824143
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@vedamic.com" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  info@vedamic.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+917004262704" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  +91 7004262704
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 py-8 border-t border-gray-700">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-orange-400 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-orange-400 text-white placeholder-gray-400 text-sm"
              />
              <button className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Vedamic Private Limited. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-600">•</span>
                <Link href="/termservice" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>by Vedamic Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}