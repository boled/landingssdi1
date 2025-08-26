import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import News from './components/News';
import Map from './components/Map';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <News />
        <Map />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
