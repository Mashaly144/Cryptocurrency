import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import Why from './components/Why';
import Stats from './components/Stats';
import NavMobile from './components/NavMobile';
import Calculate from './components/Calculate';
import Trade from './components/Trade';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  // mobile nav
  const [navMobile, setnavMobile] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div>
      <Header setnavMobile={setnavMobile} />
      <Hero />
      <div
        className={`${
          navMobile ? 'right-0' : '-right-full'
        } fixed top-0 z-10 h-full transition-all duration-100`}
      >
        <NavMobile setnavMobile={setnavMobile} />
      </div>
      <Stats />
      <Why />
      <Calculate />
      <Trade />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
