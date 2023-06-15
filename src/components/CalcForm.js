import React from 'react';

const CalcForm = () => {
  return (
    <div
      className="mx-auto w-full max-w-[942px] rounded-2xl bg-white p-12 text-darkblue shadow-primary"
      data-aos="fade-up"
      data-aos-offset="500"
    >
      {/* form */}
      <form className="flex flex-col space-y-12 lg:scroll-py-0 lg:flex-row lg:items-center lg:justify-between">
        <input
          className="input"
          type="text"
          placeholder="Enter Your Hash Rate"
        />
        <select className="select">
          <option>TH/s</option>
          <option>H/s</option>
          <option>KH/s</option>
          <option>MH/s</option>
          <option>GH/s</option>
        </select>
        <button className="btn flex self-start px-8 text-white">
          Calculate
        </button>
      </form>
      <div className="mt-10">
        <h1 className="mb-4  text-[20px] font-medium text-blue ">
          ESTIMATED 24 HOUR REVENUE:
        </h1>
        <div className="mb-3 text-[32px] font-bold">
          0.055 130 59 ETH <span className="text-blue">($1275)</span>
        </div>
        <p className=" tracking-[1%]  text-gray-500">
          Revenue will change based on mining difficulty and Ethereum price.
        </p>
      </div>
    </div>
  );
};

export default CalcForm;
