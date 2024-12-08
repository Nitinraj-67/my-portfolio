import React from 'react';
import { Mail, Linkedin, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-black mb-12 text-center">Let's Connect</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:contact@example.com" className="flex items-center gap-3 text-gray-600 hover:text-black">
                  <Mail className="w-5 h-5" />
                  contact@example.com
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-600 hover:text-black">
                  <Phone className="w-5 h-5" />
                  (123) 456-7890
                </a>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  San Francisco Bay Area
                </div>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-black"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Send a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}