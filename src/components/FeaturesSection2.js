import React from 'react';
import feature2 from '../assets/img/feature-2-img.png';
const FeaturesSection2 = () => {
  return (
    <section className="pb-[30px] lg:pb-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-end  lg:flex-row">
          <div
            className="order-2 flex flex-1 lg:absolute lg:left-0 lg:order-1"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            <img src={feature2} alt="imagesection" />
          </div>
          {/* text */}
          <div
            className=" max-w-[454px] flex-1"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <h1 className="h3 mb-6">Detailed Statistics</h1>
            <p className="mb-8 text-gray">
              View all mining related information in realtime, at any point at
              any location and decide which polls you want to mine in.
            </p>
            <button className="btn mb-6 px-8 lg:mb-0">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection2;
