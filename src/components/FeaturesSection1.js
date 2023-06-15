import React from 'react';
import feature1 from '../assets/img/feature-1-img.png';
const FeaturesSection1 = () => {
  return (
    <section className="pb-[30px] pt-0 lg:pb-[120px]">
      <div className="flex flex-col  lg:flex-row">
        {/* text */}
        <div
          className="mb-6 max-w-[454px] flex-1  lg:mt-10"
          data-aos="fade-right"
          data-aos-offset="50"
        >
          <h1 className="h3 mb-6">Invest Smart</h1>
          <p className="mb-8 text-gray">
            Get full statistic information about the behaviour of buyers and
            sellers will help you to make the decision.
          </p>
          <button className="btn px-8">Learn More</button>
        </div>
        <div
          className="flex flex-1 justify-end"
          data-aos="fade-left"
          data-aos-offset="50"
        >
          <img src={feature1} alt="imagesection" />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection1;
