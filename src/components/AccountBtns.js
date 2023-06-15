import React from 'react';

const AccountBtns = () => {
  return (
    <div className=" flex items-center gap-x-6 font-medium">
      <a className="transition-all hover:text-blue" href="#login">
        Login
      </a>
      <span className="font-thin text-white/20">|</span>
      <button className="btn h-[52px ] text-base">Register</button>
    </div>
  );
};

export default AccountBtns;
