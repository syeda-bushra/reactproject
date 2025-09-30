import React, { useEffect, useState } from "react";       
import Dashboard from "../components/Dashboard";


const Discover = () => {
  
  const [userName, setUserName] = useState("Guest");
  useEffect(() => {
    const name = localStorage.getItem("loggedInUserName");
    if (name) setUserName(name);
  }, []);

  return (
    
    <Dashboard userName={userName}>
      
      <div id="image-container">
        <img src="/nature.png" alt="Nature" />
      </div>
      <h1 className="image-heading">Discover. Explore. Go!</h1>      
      <div className="boxes-container">
        <div className="box">
          <div className="box-icon">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clip-rule="evenodd"/>
            </svg>

          </div>
          <div className="box-content">
            <h3>Ultimate Travel Destination Experience Guide</h3>
            <p>Discover the best places to visit, hidden gems, and attractions around the world.</p>
            <h4>Download Your Free Travel Guide</h4>
          </div>
        </div>

        <div className="box">
          <div className="box-icon">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z" clip-rule="evenodd"/>
            </svg>

          </div>
          <div className="box-content">
            <h3>Exclusive Travel Deals <br /> & Discounts</h3>
            <p>Get access to the latest flight offers, hotel discounts, and travel packages.</p>
            <h4>Unlock Exclusive Travel Deals</h4>
          </div>
        </div>

        <div className="box">
          <div className="box-icon">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z" clip-rule="evenodd"/>
            </svg>

          </div>
          <div className="box-content">
            <h3>Top Adventure & Travel <br /> Experiences</h3>
            <p>From breathtaking hikes to cultural city tours, explore unique activities.</p>
            <h4>Discover Amazing Travel Experiences</h4>
          </div>
        </div>
      </div>

      
    </Dashboard>
  );
};

export default Discover;
