import React, { useEffect, useState } from "react";       
import Dashboard from "../components/Dashboard";
import { FaBook } from "react-icons/fa";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { MdBackpack } from "react-icons/md";


const Discover = () => {
  
  const [userName, setUserName] = useState("Guest");
  useEffect(() => {
    const name = localStorage.getItem("loggedInUserName");
    if (name) setUserName(name);
  }, []);

  return (
    <div>
    <Dashboard userName={userName}>
      
      <div className="flex items-center justify-center bg-center h-screen bg-cover overflow-hidden
      bg-[url('/nature.png')]">
        <h1 className="text-7xl md:text-8xl text-white font-bold text-shadow-black font-[Open-Sans] -translate-y-20 whitespace-nowrap">Discover. Explore. Go!</h1>
      </div>
            
      <div className=" sm:text-xs lg:text-base flex justify-center gap-[50px] py-12 px-4">
        <div className="bg-[#f0f4ff] text-center p-4 w-[400px] h-[260px] shadow-md font-sans ">
          <div className="w-[60px] h-[60px] bg-[#4358e1] text-white rounded-full flex items-center 
          justify-center text-[28px] shadow-md mx-auto -mt-[45px] mb-5">
            <FaBook />
          </div>
          <div className="mt-10 ">
            <h3 className="font-bold text-[#4358e1] mb-4">Ultimate Travel Destination Experience Guide</h3>
            <p className="mb-4">Discover the best places to visit, hidden gems, and attractions around the world.</p>
            <h4 className="text-[#4358e1] font-semibold sm:text-xs lg:text-sm">Download Your Free Travel Guide</h4>
          </div>
        </div>
        <div className="bg-[#f0f4ff] text-center p-4 w-[400px] h-[260px] shadow-md font-sans ">
          <div className="w-[60px] h-[60px] bg-[#4358e1] text-white rounded-full flex items-center
           justify-center text-[28px] shadow-md mx-auto -mt-[45px] mb-5">
            <MdOutlineAirplanemodeActive />
          </div>
          <div className="mt-10 ">
            <h3 className="font-bold text-[#4358e1] mb-4">Exclusive Travel Deals & Discounts</h3>
            <p className="mb-4">Get access to the latest flight offers, hotel discounts, and travel packages.</p>
            <h4 className="text-[#4358e1] font-semibold sm:text-xs lg:text-sm">Unlock Exclusive Travel Deals</h4>
          </div>
        </div>
        <div className="bg-[#f0f4ff] text-center p-4 w-[400px] h-[260px] shadow-md font-sans">
          <div className="w-[60px] h-[60px] bg-[#4358e1] text-white rounded-full flex items-center
           justify-center text-[28px] shadow-md mx-auto -mt-[45px] mb-5">
            <MdBackpack />
          </div>
          <div className="mt-10 ">
            <h3 className="font-bold text-[#4358e1] mb-4">Top Adventure & Travel Experiences</h3>
            <p className="mb-4">From breathtaking hikes to cultural city tours, explore unique activities.</p>
            <h4 className="text-[#4358e1] font-semibold sm:text-xs lg:text-sm">Discover Amazing Travel Experiences</h4>
          </div>
        </div>
      </div>

      
    </Dashboard>
    </div>
  );
};

export default Discover;
