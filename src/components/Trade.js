import React, { useState } from 'react';
import { currency } from '../data';
import { IoIosArrowForward } from 'react-icons/io';

const Trade = () => {
  const [itemName, setitemName] = useState('Bitcoin');
  return (
    <section className="section bg-gradient-to-b from-[#f8f9fb] to-[#fafbff] text-darkblue lg:-mt-[320px] lg:pt-[320px]">
      <div className="container mx-auto">
        <h2
          className="section-title mb-16 text-center"
          data-aos="fade-up"
          data-aos-offset="50"
        >
          Trade securely and market the high growth cryptocurrencies.
        </h2>
        {/* items */}
        <div
          className="flex flex-col  gap-[45px]  lg:flex-row"
          data-aos="fade-up"
          data-aos-offset="50"
        >
          {currency.map((item, index) => {
            return (
              <div
                onClick={() => setitemName(item.name)}
                className={`${
                  item.name === itemName ? 'bg-violet text-white' : 'bg-white'
                } w-full cursor-pointer rounded-2xl px-6 py-12 shadow-primary transition-all duration-300`}
                key={index}
              >
                <div className="flex flex-col items-center justify-center">
                  <img className="mb-12" src={item.image} alt="imae" />
                  {/* name */}
                  <div className="mb-4 flex items-center gap-x-2">
                    <h2 className="text-[32px] font-bold">{item.name}</h2>
                    <span className="text-lg font-medium text-gray-400">
                      {item.abbr}
                    </span>
                  </div>
                  {/* button and discroption */}
                  <p className="mb-6 text-center">{item.description}</p>
                  <button
                    className={`${
                      item.name === itemName
                        ? 'gap-x-3 border-none bg-blue pl-8 pr-6 text-white hover:bg-blue-hover'
                        : 'w-16 text-blue'
                    } flex h-16 items-center justify-center rounded-full border-2 border-gray-300`}
                  >
                    {item.name === itemName && (
                      <div className="text-lg font-medium">Start Mining</div>
                    )}
                    <IoIosArrowForward
                      className={`${
                        item.name === itemName ? 'text-2xl' : 'text-3xl'
                      }`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trade;
