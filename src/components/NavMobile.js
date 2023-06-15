import React from 'react';
import { CgClose } from 'react-icons/cg';
import { navData } from '../data';

const NavMobile = ({ setnavMobile }) => {
  return (
    <nav className="bottom-0 top-0 flex h-full w-80 items-center justify-center bg-violet lg:hidden">
      <div
        onClick={() => setnavMobile(false)}
        className="absolute left-2 top-2 cursor-pointer"
      >
        <CgClose className="text-3xl" />
      </div>
      {/* list */}
      <ul className="flex flex-col gap-y-8 text-xl">
        {navData.map((item, index) => {
          return (
            <li className="" key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
