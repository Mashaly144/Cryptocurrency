import React from 'react';
// images
import Image from '../assets/img/hero-img.png';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
const Hero = () => (
  <section className="section">
    <div className="container mx-auto">
      <div className="flex flex-col items-center lg:flex-row">
        {/* hero text */}
        <div className="flex-1">
          {/* badage */}
          <div
            className="mb-6 max-w-[365px] rounded-full bg-white/10 p-1 pl-1 pr-3"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <div className=" flex items-center justify-between text-sm lg:text-base">
              <div className="rounded-full bg-white px-4 py-1 font-medium text-darkblue">
                75% SAVE
              </div>
              <div>For The Black Friday Weekend</div>
            </div>
          </div>
          <h1
            className="mb-6 text-[32px] font-bold leading-tight lg:text-[64px]"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            Fastest & secure platform to invest <br /> in crypto
          </h1>
          <p
            className="mb-8 max-w-[440px] leading-relaxed"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.s
          </p>
          <button
            className="btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base "
            data-aos="fade-down"
            data-aos-delay="700"
          >
            Try for FREE{' '}
            <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
          </button>
        </div>
        {/* hero image  */}
        <div className="flex-1">
          <img src={Image} alt="a" data-aos="fade-up" data-aos-delay="600" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
