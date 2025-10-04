import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Gallery />
    </div>
  );
};

export default Home;