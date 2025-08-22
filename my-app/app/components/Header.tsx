"use client";

import { useState } from "react";
import Link from "next/link";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Locations", href: "#locations" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full opacity-30 blur-3xl" />
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br from-pink-50 to-orange-50 rounded-full opacity-40 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo with creative animation */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="relative inline-flex">
              <span className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 morph-shape">
                <span className="text-white font-bold text-lg leading-none">O</span>
              </span>
              <span className="absolute inset-0 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            </span>
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              OneTree SEO
            </span>
            <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-600 hover:text-primary transition-all duration-300 group py-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />
              </Link>
            ))}
          </nav>

          {/* Glowing CTA Button */}
          <div className="hidden md:block">
            <Button className="glow-button border-0 text-white relative overflow-hidden">
              <span className="relative z-10 inline-flex items-center">
                Get Free Audit
                <Sparkles className="ml-2 h-4 w-4 animate-pulse" />
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="md:hidden relative p-2 rounded-lg hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? (
              <X size={24} className="transition-transform duration-300 rotate-180" />
            ) : (
              <Menu size={24} className="transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 slide-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="glow-button mt-2 border-0 text-white">
                <span className="inline-flex items-center">
                  Get Free Audit
                  <Sparkles className="ml-2 h-4 w-4" />
                </span>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
