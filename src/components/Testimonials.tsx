import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Sarah's deep understanding of healthcare technology and her ability to translate complex solutions into tangible benefits has been invaluable to our organization.",
    author: "Dr. Michael Chang",
    role: "CTO, Regional Healthcare Network"
  },
  {
    quote: "Working with Sarah transformed our approach to digital health solutions. Her strategic insights and execution capabilities are exceptional.",
    author: "Jennifer Martinez",
    role: "VP of Operations, MedTech Solutions"
  },
  {
    quote: "Sarah's leadership in implementing our new EMR system was outstanding. Her attention to detail and client-first approach made all the difference.",
    author: "Robert Wilson",
    role: "Director of IT, Healthcare Systems"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl">
              <Quote className="w-8 h-8 text-white mb-4" />
              <p className="text-gray-300 mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}