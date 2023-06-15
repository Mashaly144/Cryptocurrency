import React from 'react';
import {
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitch,
  IoLogoLinkedin,
} from 'react-icons/io';
import Logo from '../assets/img/logo.svg';
import visa from '../assets/img/visa.png';
import mastercard from '../assets/img/mastercard.png';
import bitcoin from '../assets/img/bitcoin.png';
import { navData, resources } from '../data';
const Footer = () => {
  return (
    <footer className="pt-0 lg:pt-24" data-aos="fade-up" data-aos-offset="50">
      <div className="container mx-auto lg:mb-24">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* logo */}
          <div className="mx-auto mb-6 max-w-[285px] flex-1 lg:mx-0">
            <a href="#logo">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          {/* linls groub */}
          <div className="flex flex-1 flex-col  gap-16 lg:flex-row">
            {/* nav links */}
            <div className="w-full text-center lg:text-left">
              <h1 className=" mb-6 text-2xl font-medium">Quick Link</h1>
              <ul className=" space-y-4 text-xl  text-gray">
                {navData.map((item, index) => {
                  return (
                    <li
                      className="transition-all duration-300 hover:text-blue"
                      key={index}
                    >
                      <a href={item.href}>{item.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* resources */}
            <div className="w-full text-center lg:text-left">
              <h1 className="mb-6 text-2xl font-medium">Resources</h1>
              <ul className="space-y-4 text-xl  text-gray">
                {resources.map((item, index) => {
                  return (
                    <li
                      className="transition-all duration-300 hover:text-blue"
                      key={index}
                    >
                      <a href={item.href}>{item.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* payment */}
          <div className="flex flex-1 flex-col">
            <div className="lg:ml-[80px]">
              <h1 className="h3 mb-10 text-center font-medium lg:text-left">
                We accept following payment systems
              </h1>
              <div className="flex items-center justify-center gap-6">
                <img src={visa} alt="visa" />
                <img src={mastercard} alt="mastercard" />
                <img src={bitcoin} alt="bitcoin" />
              </div>
            </div>
          </div>
          {/* foot */}
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center py-10 lg:flex-row lg:justify-between">
        <h1 className="mb-5">©2021 CRAPPO. All rights reserved</h1>
        <div className="flex gap-x-8 text-2xl">
          <IoLogoFacebook className="transition hover:text-blue" />
          <IoLogoInstagram className="transition hover:text-blue" />
          <IoLogoYoutube className="transition hover:text-blue" />
          <IoLogoTwitch className="transition hover:text-blue" />
          <IoLogoLinkedin className="transition hover:text-blue" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
