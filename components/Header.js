import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../public/images/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    // { href: '/blog', label: 'Blog' },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-2xl border-b border-orange-100/50"
            : "bg-white shadow-xl"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <Link href="/" className="relative z-10 group">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <Image
                    src={logo}
                    alt="Vedamic Logo"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="">
                  <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r bg-black bg-clip-text text-transparent">
                    Vedamic
                  </h1>
                  <p className="text-xs text-blue-400 -mt-1 font-medium">
                    Private Limited
                  </p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2.5 text-gray-700 hover:text-orange-600 font-medium transition-all duration-300 group overflow-hidden rounded-lg"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center px-6 py-3 bg-gradient-to-r bg-black text-white font-semibold rounded-full hover:from-green-600 hover:via-blue-700 hover:to-red-700 transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-orange-200 group"
              >
                <span className="relative z-10">Get Started</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2.5 rounded-xl hover:bg-orange-50 transition-all duration-300 group relative z-50"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 relative">
                  <span
                    className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transform transition-all duration-300 ${
                      isOpen ? "rotate-45 translate-y-2.5" : ""
                    }`}
                  ></span>
                  <span
                    className={`absolute top-2.5 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`absolute top-5 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transform transition-all duration-300 ${
                      isOpen ? "-rotate-45 -translate-y-2.5" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40 transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl lg:hidden z-40 transform transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-20 px-6 py-8 h-full overflow-y-auto">
          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-6 py-4 text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 rounded-xl font-medium transition-all duration-300 group"
                onClick={() => setIsOpen(false)}
              >
                <span className="flex items-center justify-between">
                  {item.label}
                  <svg
                    className="w-5 h-5 text-orange-400 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </nav>

          <div className="pt-6 mt-6 border-t border-orange-100">
            <Link
              href="/contact"
              className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:via-orange-700 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg group"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative z-10">Get Started</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
