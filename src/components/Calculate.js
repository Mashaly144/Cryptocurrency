import React from 'react';
import CalcForm from './CalcForm';
const Calculate = () => {
  return (
    <section className="section">
      <div className="container mx-auto ">
        {/* text */}
        <div className="text-center">
          <h1
            className="section-title"
            data-aos="fade-up"
            data-aos-offset="400"
          >
            Check how much you can earn
          </h1>
          <p
            className="section-subtitle mx-auto mb-16 max-w-[622px] text-lg"
            data-aos="fade-up"
            data-aos-offset="450"
          >
            Let’s check your hash rate to see how much you will earn today,
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        {/* form*/}
        <CalcForm />
      </div>
    </section>
  );
};

export default Calculate;
