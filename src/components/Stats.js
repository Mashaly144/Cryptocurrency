import React from 'react';
import { HiChartBar, HiUser, HiGlobe } from 'react-icons/hi';
const Stats = () => {
  return (
    <section
      className="section container mx-auto"
      data-aos="fade-up"
      data-aos-delay="50"
    >
      {/* all state */}
      <div className="flex flex-col gap-y-6 lg:flex-row lg:justify-between">
        {/* state one */}
        <div className="flex items-center gap-x-6">
          {/* icon */}
          <div className="flex h-20 w-20 items-center  justify-center rounded-full bg-white/10 text-3xl text-blue">
            <HiChartBar />
          </div>
          {/* text */}
          <div>
            <h1 className="text-2xl font-bold lg:mb-2 lg:text-[40px]">$40B</h1>
            <p className="text-gray">Digital Currency Exchanged</p>
          </div>
        </div>
        {/* state one */}
        <div className="flex items-center gap-4">
          {/* icon */}
          <div className="flex h-20 w-20 items-center  justify-center rounded-full bg-white/10 text-3xl text-blue">
            <HiUser />
          </div>
          {/* text */}
          <div>
            <h1 className="text-2xl font-bold lg:mb-2 lg:text-[40px]">10M+</h1>
            <p className="text-gray">Trusted Wallets Investor</p>
          </div>
        </div>
        {/* state one */}
        <div className="flex items-center gap-4">
          {/* icon */}
          <div className="flex h-20 w-20 items-center  justify-center rounded-full bg-white/10 text-3xl text-blue">
            <HiGlobe />
          </div>
          {/* text */}
          <div>
            <h1 className="text-2xl font-bold lg:mb-2 lg:text-[40px]">195</h1>
            <p className="text-gray">Countries Supported</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
