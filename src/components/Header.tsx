import React from 'react';
import { Menu, X, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black">Sarah Chen</h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-black">About</a>
            <a href="#experience" className="text-gray-600 hover:text-black">Experience</a>
            <a href="#skills" className="text-gray-600 hover:text-black">Skills</a>
            <a href="#case-studies" className="text-gray-600 hover:text-black">Case Studies</a>
            <div className="flex items-center space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-800 hover:text-black">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block text-gray-600 hover:text-black">About</a>
            <a href="#experience" className="block text-gray-600 hover:text-black">Experience</a>
            <a href="#skills" className="block text-gray-600 hover:text-black">Skills</a>
            <a href="#case-studies" className="block text-gray-600 hover:text-black">Case Studies</a>
          </div>
        )}
      </nav>
    </header>
  );
}