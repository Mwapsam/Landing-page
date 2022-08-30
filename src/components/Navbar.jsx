import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt='hoobank' className="w-[124px] h-[32px]" />
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <li 
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[15px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>

            </li>
          ))}
      </ul>
      <div >

      </div>
    </div>
  )
}

export default Navbar