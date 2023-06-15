import React from 'react';

import whyImag from '../assets/img/why-img.png';

const Why = () => {
  return (
    <section className="section container mx-auto py-[25px]">
      <div className="flex flex-col items-center gap-x-8  lg:flex-row">
        {/* imag */}
        <div
          data-aos="fade-right"
          data-aos-offset="400"
          className="order-1 lg:order-2"
        >
          <img src={whyImag} alt="img" />
        </div>
        {/* text */}
        <div
          data-aos="fade-left"
          data-aos-offset="400"
          className="order-1 max-w-[480px] lg:order-2"
        >
          <h1 className="section-title">Why you should choose CRAPPO</h1>
          <p className="section-subtitle">
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </p>
          <button className="btn px-6">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Why;
