import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          © {new Date().getFullYear()} Sarah Chen. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;