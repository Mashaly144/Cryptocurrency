import React from 'react';
import { CgMenuRight } from 'react-icons/cg';
// import components
import Logo from '../assets/img/logo.svg';
import Nav from './Nav';
import AccountBtns from './AccountBtns';

const Header = ({ setnavMobile }) => {
  return (
    <header
      className="py-[30px] lg:pt-[60px]"
      data-aos="fade-down"
      data-aos-delay="900"
      data-aos-duration="2000"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <a href="#home">
          <img src={Logo} alt="logo" />
        </a>
        <div className="hidden gap-x-[55px] lg:flex">
          {/* nav */}
          <Nav />
          {/* nav button */}
          <AccountBtns />
        </div>
        {/* open nav */}
        <div
          onClick={() => setnavMobile(true)}
          className="cursor-pointer lg:hidden"
        >
          <CgMenuRight className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
