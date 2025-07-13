// import Footer from '@/components/Footer';
// import Header from '@/components/Header';
// import { useState, useEffect } from 'react';

// export default function About() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const teamMembers = [
//     {
//       name: "Sarah Johnson",
//       role: "CEO & Founder",
//       bio: "Visionary leader with 15+ years in tech innovation and business strategy.",
//       linkedin: "#",
//       twitter: "#"
//     },
//     {
//       name: "Michael Chen",
//       role: "CTO",
//       bio: "Full-stack architect specializing in scalable cloud solutions and AI integration.",
//       linkedin: "#",
//       twitter: "#"
//     },
//     {
//       name: "Emily Rodriguez",
//       role: "Lead Designer",
//       bio: "Creative director crafting user experiences that delight and convert.",
//       linkedin: "#",
//       twitter: "#"
//     },
//     {
//       name: "David Kim",
//       role: "Senior Developer",
//       bio: "Backend specialist with expertise in microservices and database optimization.",
//       linkedin: "#",
//       twitter: "#"
//     }
//   ];

//   const values = [
//     {
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//       ),
//       title: "Innovation",
//       description: "We push boundaries and embrace cutting-edge technologies to deliver solutions that set you apart."
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//       title: "Quality",
//       description: "Every line of code, every design element, and every interaction is crafted with meticulous attention to detail."
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//       ),
//       title: "Collaboration",
//       description: "We believe in transparent communication and working closely with our clients as true partners."
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//         </svg>
//       ),
//       title: "Growth",
//       description: "We're committed to continuous learning and helping our clients achieve sustainable business growth."
//     }
//   ];

//   const milestones = [
//     { year: "2020", title: "Company Founded", description: "TechNova Solutions was established with a vision to revolutionize software development." },
//     { year: "2021", title: "First Major Client", description: "Secured our first enterprise client and delivered a game-changing solution." },
//     { year: "2022", title: "Team Expansion", description: "Grew our team to 25+ skilled professionals across multiple disciplines." },
//     { year: "2023", title: "100+ Projects", description: "Celebrated completing over 100 successful projects for clients worldwide." },
//     { year: "2024", title: "AI Integration", description: "Launched our AI-powered development tools and consulting services." },
//     { year: "2025", title: "Global Reach", description: "Expanded operations to serve clients across 15+ countries." }
//   ];

//   return (
    
//     <div className="min-h-screen bg-white">
//      <Header />
//       <div className="pt-20 md:pt-24 lg:pt-28"></div>

//       {/* Hero Section */}
//       <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
//         <div className="absolute inset-0 bg-[url(`data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`)] opacity-20"></div>
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//               <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//                 About <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">TechNova</span>
//               </h1> 
//               <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
//                 We're not just developers – we're digital architects crafting the future of technology, one innovative solution at a time.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Story Section */}
//       <section className="py-16 md:py-20 lg:py-24 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
//             <div className="order-2 lg:order-1">
//               <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
//               <div className="space-y-6">
//                 <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
//                   TechNova Solutions was born from a simple yet powerful vision: to bridge the gap between cutting-edge technology and real-world business needs. Founded in 2020 by a team of passionate developers and strategists, we've grown from a small startup to a trusted partner for businesses worldwide.
//                 </p>
//                 <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
//                   Our journey began with the belief that technology should empower, not complicate. Every solution we create is designed with the end user in mind, ensuring that complex problems have elegant, intuitive solutions.
//                 </p>
//                 <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
//                   Today, we're proud to have helped over 100 companies transform their digital presence, from ambitious startups to established enterprises. Our commitment to innovation, quality, and client success remains at the heart of everything we do.
//                 </p>
//               </div>
//             </div>
//             <div className="order-1 lg:order-2">
//               <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
//                 <div className="grid grid-cols-2 gap-4 sm:gap-6">
//                   <div className="text-center">
//                     <div className="text-2xl sm:text-3xl font-bold mb-2">500+</div>
//                     <div className="text-orange-100 text-sm sm:text-base">Projects Delivered</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl sm:text-3xl font-bold mb-2">100+</div>
//                     <div className="text-orange-100 text-sm sm:text-base">Happy Clients</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl sm:text-3xl font-bold mb-2">25+</div>
//                     <div className="text-orange-100 text-sm sm:text-base">Team Members</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl sm:text-3xl font-bold mb-2">15+</div>
//                     <div className="text-orange-100 text-sm sm:text-base">Countries Served</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
//             <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
//                 <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 To empower businesses with technology that transforms ideas into reality. We strive to deliver innovative, scalable, and user-centric solutions that drive meaningful growth and create lasting value for our clients and their customers.
//               </p>
//             </div>
//             <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
//                 <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                 </svg>
//               </div>
//               <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 To be the global leader in innovative software solutions, recognized for our commitment to excellence, creativity, and client success. We envision a future where technology seamlessly integrates with human needs, creating a more connected and efficient world.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-16 md:py-20 lg:py-24 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
//             <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
//               These core principles guide every decision we make and every solution we create.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {values.map((value, index) => (
//               <div key={index} className="text-center group">
//                 <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                   {value.icon}
//                 </div>
//                 <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
//                 <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
//             <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
//               From humble beginnings to industry recognition, here's how we've grown.
//             </p>
//           </div>
//           <div className="relative max-w-4xl mx-auto">
//             {/* Timeline line - hidden on mobile */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-red-500 rounded-full hidden md:block"></div>
            
//             <div className="space-y-8 md:space-y-12">
//               {milestones.map((milestone, index) => (
//                 <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}>
//                   <div className="w-full md:w-1/2 md:pr-8">
//                     {(index % 2 === 0 || window.innerWidth < 768) && (
//                       <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
//                         <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                           <div className="text-xl sm:text-2xl font-bold text-orange-500 mb-2">{milestone.year}</div>
//                           <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
//                           <p className="text-gray-600 text-sm sm:text-base">{milestone.description}</p>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                   <div className="relative z-10 hidden md:block">
//                     <div className="w-4 h-4 bg-white border-4 border-orange-500 rounded-full shadow-lg"></div>
//                   </div>
//                   <div className="w-full md:w-1/2 md:pl-8">
//                     {index % 2 === 1 && (
//                       <div className="text-left hidden md:block">
//                         <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
//                           <div className="text-xl sm:text-2xl font-bold text-orange-500 mb-2">{milestone.year}</div>
//                           <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
//                           <p className="text-gray-600 text-sm sm:text-base">{milestone.description}</p>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-16 md:py-20 lg:py-24 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12 md:mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
//             <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
//               The brilliant minds behind TechNova's success stories.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {teamMembers.map((member, index) => (
//               <div key={index} className="group">
//                 <div className="relative overflow-hidden rounded-2xl mb-4 shadow-lg">
//                   <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
//                     <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg">
//                       {member.name.split(' ').map(n => n[0]).join('')}
//                     </div>
//                   </div>
//                   <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
//                 </div>
//                 <div className="text-center">
//                   <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
//                   <p className="text-orange-500 font-medium mb-2 text-sm sm:text-base">{member.role}</p>
//                   <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
//                   <div className="flex justify-center space-x-3">
//                     <a href={member.linkedin} className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors">
//                       <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                       </svg>
//                     </a>
//                     <a href={member.twitter} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
//                       <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-orange-500 to-red-500">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Work Together?</h2>
//           <p className="text-lg sm:text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
//             Let's discuss how we can help transform your business with innovative technology solutions.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a href="/contact" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-500 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
//               Start Your Project
//               <svg className="w-4 sm:w-5 h-4 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </a>
//             <a href="/portfolio" className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-500 transition-all duration-200">
//               View Our Work
//             </a>
//           </div>
//         </div>
//       </section>
//       <Footer/>
//     </div>
//   );
// }


import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      name: "Abhishek Kumar",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in tech innovation and business strategy.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Full-stack architect specializing in scalable cloud solutions and AI integration.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Saket",
      role: "CFO",
      bio: "Manage Finance",
      linkedin: "#",
      twitter: "#"
    },
    
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "We push boundaries and embrace cutting-edge technologies to deliver solutions that set you apart."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quality",
      description: "Every line of code, every design element, and every interaction is crafted with meticulous attention to detail."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Collaboration",
      description: "We believe in transparent communication and working closely with our clients as true partners."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Growth",
      description: "We're committed to continuous learning and helping our clients achieve sustainable business growth."
    }
  ];

  const milestones = [
    { year: "2020", title: "Company Founded", description: "TechNova Solutions was established with a vision to revolutionize software development." },
    { year: "2021", title: "First Major Client", description: "Secured our first enterprise client and delivered a game-changing solution." },
    { year: "2022", title: "Team Expansion", description: "Grew our team to 25+ skilled professionals across multiple disciplines." },
    { year: "2023", title: "100+ Projects", description: "Celebrated completing over 100 successful projects for clients worldwide." },
    { year: "2024", title: "AI Integration", description: "Launched our AI-powered development tools and consulting services." },
    { year: "2025", title: "Global Reach", description: "Expanded operations to serve clients across 15+ countries." }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20 md:pt-24 lg:pt-28"></div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-24 bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                About <span className="text-orange-500">Vedamic</span>
              </h1> 
              <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                We're digital architects crafting the future of technology with innovative solutions that drive real business results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2025, Vedamic began as a small team of passionate technologists with a shared vision: to create software solutions that truly make a difference. Today, we've grown into a trusted partner for businesses worldwide, delivering exceptional results through innovation and expertise.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our journey has been marked by continuous learning, adaptation, and a relentless focus on delivering value. From our first project to our hundredth, we've maintained the same commitment to excellence that defines our work.
                </p>
                <div className="bg-blue-50 border-l-4 border-orange-500 p-4">
                  <p className="text-blue-900 font-medium italic">
                    "Technology should solve problems, not create them. That's why we focus on building solutions that are as intuitive as they are powerful."
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-200">Projects Delivered</div>
              </div>
              <div className="bg-orange-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-orange-100">Happy Clients</div>
              </div>
              <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-gray-300">Team Members</div>
              </div>
              <div className="bg-blue-800 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-blue-200">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with transformative technology solutions that drive growth, efficiency, and competitive advantage in an increasingly digital world.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized globally as the premier partner for digital transformation, setting the standard for innovation, quality, and client success in the technology sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${index % 2 === 0 ? 'bg-blue-100 text-blue-900' : 'bg-orange-100 text-orange-500'}`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth and development
            </p>
          </div>
          <div className="relative">
            
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-900 via-orange-500 to-gray-900"></div>
            
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className="w-full md:w-1/2 p-4">
                    <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <div className="text-blue-900 font-bold mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-1/2 justify-center">
                    <div className={`w-6 h-6 rounded-full ${index % 3 === 0 ? 'bg-blue-900' : index % 3 === 1 ? 'bg-orange-500' : 'bg-gray-900'}`}></div>
                  </div>
                  
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The talented individuals who make TechNova exceptional
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-square bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center">
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold ${index % 3 === 0 ? 'bg-blue-900' : index % 3 === 1 ? 'bg-orange-500' : 'bg-gray-900'}`}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-900 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <a href={member.linkedin} className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                      <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href={member.twitter} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-blue-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how TechNova can help you achieve your digital goals with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Start Your Project
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