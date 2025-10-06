import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";

const Contact = () => {
  const [userName, setUserName] = useState("Guest");

  useEffect(() => {
    const name = localStorage.getItem("loggedInUserName");
    if (name) setUserName(name);
  }, []);


  const [formData, setFormData] = useState({
    fromCountry: "",
    toCountry: "",
    date: "",
    duration:"",
    adults: "",
    children: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,[name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fromCountry, toCountry, date,duration, adults, children } = formData;
    setFormData({fromCountry:"",toCountry:"",date:"",duration:"",adults:"",children:""});
  };


  return (
    <div>
      <Dashboard userName={userName}>
        <div className="flex items-center justify-content h-screen bg-center bg-cover max-w-full mx-auto overflow-x-hidden
        bg-[url('/background.png')] "
        >
          <div className=" justify-content ml-16">
            <h1 className="text-7xl text-white text-shadow-lg/20 whitespace-nowrap  font-[Open-Sans] " >
              Let's Plan Your Next <br /> Adventure!
            </h1>

            <p className="text-white  text-shadow-lg/1 text-sm mt-6 drop-shadow-lg tracking-wide leading-6 font-light">
              Have a question or need help planning your next trip? Our team is here <br />
              to guide you with recommendations, bookings, and travel tips. <br />
              Reach out and let’s start your journey together.
            </p>

            <button className="mt-8 px-6 py-3 text-white font-semibold border-2 border-white rounded-md ">
              Learn More
            </button>
          </div>
  

    <div className="flex items-center justify-content px-48 mr-16 ">
      <div className="w-full bg-gray-200 rounded-xl shadow-md py-16 px-12 ml-16 mb-8">
        <h2 className="text-[22px] font-bold text-black mb-8 text-left">
        FIND YOUR TOUR
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-4 w-[400px]">
            <p className="text-sm text-gray-700 font-medium pl-2">From</p>
            <input
              type="text"
              name="fromCountry"
              placeholder="From Country"
              value={formData.fromCountry}
              onChange={handleChange}
              className="bg-white text-black rounded-3xl p-2 placeholder-gray-500
               focus:bg-gray-100 focus:outline-none transition duration-150"
            />
            <p className="text-sm text-gray-700 font-medium pl-2">To</p>
            <input
              type="text"
              name="toCountry"
              placeholder="To Country"
              value={formData.toCountry}
              onChange={handleChange}
              className="bg-white text-black rounded-3xl p-2 placeholder-gray-500
               focus:bg-gray-100 focus:outline-none transition duration-150"
              />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-4">
                  <p className="text-sm text-gray-700 font-medium pl-2">Date</p>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-white text-black rounded-3xl p-2 placeholder-gray-500
                     focus:bg-gray-100 focus:outline-none transition duration-150"
                  />
                  </div>
                  <div className="flex flex-col space-y-4">
                    <p className="text-sm text-gray-700 font-medium pl-2">Duration</p>
                    <input
                      type="number"
                      name="duration"
                      placeholder="Any length"
                      value={formData.duration}
                      onChange={handleChange}
                      className="bg-white text-black rounded-3xl p-2 placeholder-gray-500
                       focus:bg-gray-100 focus:outline-none transition duration-150"
                    />
                    </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-4">
                  <p className="text-sm text-gray-700 font-medium pl-2">Adults</p>
                  <input
                    type="number"
                    name="adults"
                    placeholder="Adults"
                    value={formData.adults}
                    onChange={handleChange}
                    className="bg-white text-black rounded-3xl p-2 placeholder-gray-500 
                    focus:bg-gray-100 focus:outline-none transition duration-150"
                    />
                </div>
                <div className="flex flex-col space-y-4">
                  <p className="text-sm text-gray-700 font-medium pl-2">Children</p>
                  <input
                    type="number"
                    name="children"
                    placeholder="Children"
                    value={formData.children}
                    onChange={handleChange}
                    className="bg-white text-black rounded-3xl p-2 placeholder-gray-500
                    focus:bg-gray-100 focus:outline-none transition duration-150"/>
                </div>
              </div>
              <button
              type="submit"
              className="bg-yellow-400 text-white font-medium rounded-3xl py-2 px-4 hover:bg-[#4358e1] transition duration-200">
                Search Flight
                </button>
        </form>
      </div>
   </div>
 </div>
</Dashboard>
</div>
  );
};

export default Contact;
