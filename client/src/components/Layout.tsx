import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Fish } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Our Fish' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F9FA] font-sans text-slate-800">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-[#25A18E]/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link href="/">
              <a className="flex items-center gap-2 group">
                <div className="p-2 bg-[#004E64] rounded-full text-white group-hover:bg-[#25A18E] transition-colors duration-300">
                  <Fish size={24} />
                </div>
                <span className="text-xl font-bold text-[#004E64] tracking-tight">
                  Zen<span className="text-[#25A18E]">Aquatics</span>
                </span>
              </a>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`text-sm font-medium transition-colors duration-200 hover:text-[#25A18E] ${
                      location === link.href ? 'text-[#004E64] font-bold' : 'text-slate-500'
                    }`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <Link href="/products">
                <a className="px-5 py-2.5 bg-[#004E64] text-white text-sm font-medium rounded-full hover:bg-[#25A18E] transition-all duration-300 shadow-lg shadow-[#25A18E]/20">
                  Shop Now
                </a>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-[#004E64] focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className={`block px-3 py-3 rounded-md text-base font-medium ${
                      location === link.href
                        ? 'bg-[#F5F9FA] text-[#004E64]'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-[#25A18E]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#004E64] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Fish size={24} className="text-[#25A18E]" />
                <span className="text-xl font-bold">ZenAquatics</span>
              </div>
              <p className="text-slate-300 leading-relaxed max-w-xs">
                Bringing the serenity of nature into your home with ethically sourced freshwater fish and premium aquatic plants.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#25A18E]">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/"><a className="text-slate-300 hover:text-white transition-colors">Home</a></Link></li>
                <li><Link href="/products"><a className="text-slate-300 hover:text-white transition-colors">Our Collection</a></Link></li>
                <li><Link href="/contact"><a className="text-slate-300 hover:text-white transition-colors">Contact Us</a></Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#25A18E]">Visit Us</h3>
              <p className="text-slate-300 mb-2">123 Riverbed Lane</p>
              <p className="text-slate-300 mb-2">Freshwater City, FC 90210</p>
              <p className="text-slate-300 mt-4">hello@zenaquatics.com</p>
              <p className="text-slate-300">(555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} ZenAquatics. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
