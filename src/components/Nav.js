import React from 'react';
import { navData } from '../data';
const Nav = () => {
  return (
    <div className="flex items-center">
      <ul className="flex  gap-x-8 text-xl text-gray">
        {navData.map((item, index) => {
          return (
            <li
              className=" border-b-2 border-transparent transition-all duration-300 hover:border-blue"
              key={index}
            >
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
      
    </div>
  );
};

export default Nav;
