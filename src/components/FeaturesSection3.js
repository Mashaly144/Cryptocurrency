import React from 'react';
import feature3 from '../assets/img/feature-3-img.png';

const FeaturesSection3 = () => {
  return (
    <section className="pb-[30px] pt-0 lg:pb-[120px]">
      <div className="flex flex-col  lg:flex-row">
        {/* text */}
        <div
          className="mb-6 max-w-[454px] flex-1  lg:mt-10"
          data-aos="fade-right"
          data-aos-offset="400"
        >
          <h1 className="h3 mb-6">
            Grow your profit and track your investments
          </h1>
          <p className="mb-8 text-gray">
            Use advanced analytical tools. Clear TradingView charts let you
            track current and historical profit investments.
          </p>
          <button className="btn px-8">Learn More</button>
        </div>
        <div
          className="flex flex-1 justify-end"
          data-aos="fade-left"
          data-aos-offset="400"
        >
          <img src={feature3} alt="imagesection" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection3;
