import React from 'react';
import NewsletterForm from './NewsletterForm';

const Newsletter = () => {
  return (
    <section className="bg-newsletter bg-cover p-[40px] lg:p-[80px]">
      <div className="container mx-auto ">
        <div
          className="flex flex-col items-center justify-between rounded-2xl bg-blue p-12 lg:h-[216px] lg:flex-row lg:bg-newsletterBox lg:bg-no-repeat"
          data-aos="fade-up"
          data-aos-offset="400"
        >
          {/* text */}
          <div className="w-full flex-1">
            <h1 className="h3 mb-4">Start mining now</h1>
            <p className="mb-8 max-w-[348px] text-gray-300">
              Join now with CRAPPO to get the latest news and start mining now
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
