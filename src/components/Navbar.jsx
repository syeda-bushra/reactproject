import React from 'react';
import { NavLink } from 'react-router-dom';
import {NavbarMenu} from "../mockData/data";
const Navbar = ({ userName = "Guest" }) => {
  
  return (

    <>
    <div className=" bg-[#4358e1] container flex justify-between items-center  max-w-full mx-auto h-14">
      <div className="text-2xl flex items-center gap-2 font-bold uppercase">
        <img src="/logo2.png" alt="FlyAway Logo" className="h-[120px] w-[150px]" />
      </div>
     
     
    <div className="hidden-x-overflow pl-10">
      <ul className="flex items-center gap-6 text-white ">
        {NavbarMenu.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `inline-block py-1 px-3 font-semibold hover:text-black ${
                    isActive ? 'text-black' : 'text-white'
                  }`
                }
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        
      </ul>
    </div>
    <div className="flex items-center gap-2 pr-4">
      Welcome,<span>{userName}!</span>

    </div>
      
    </div>
    </>
    
    
    
  );
};

export default Navbar;
