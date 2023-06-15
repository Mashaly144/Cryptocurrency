import React from 'react';

const NewsletterForm = () => {
  return (
    <form className="flex w-full flex-1 flex-col items-start gap-y-6 lg:flex-row lg:gap-x-10">
      <input
        type="text"
        placeholder="Enter Your Email"
        className="input text-base placeholder:text-base placeholder:text-white"
      />
      <button className="btn bg-white px-8 text-darkblue hover:bg-white/70">
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterForm;
