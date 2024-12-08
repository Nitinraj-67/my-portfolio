import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Transforming Healthcare Through Technology
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              8+ years of experience driving innovation in healthcare technology sales and operations
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
            >
              Let's Connect <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
              alt="Professional headshot"
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}