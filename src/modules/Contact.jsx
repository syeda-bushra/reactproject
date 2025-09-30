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
    adults: "",
    children: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fromCountry, toCountry, date, adults, children } = formData;
    console.log("Form submitted:", formData);
    setFormData({fromCountry:"",toCountry:"",date:"",adults:"",children:""});

  };

  return (
    <div>
      <Dashboard userName={userName}>
        <div className="hero-section">
          <h1>
            Let's Plan Your Next <br /> Adventure!
          </h1>
          <p>
            Have a question or need help planning your next trip? Our team is
            here <br />
            to guide you with recommendations, bookings, and travel tips.
            <br />
            Reach out and let’s start your journey together
          </p>
          <button>Learn More</button>

          <div className="containers">
            <h2>FIND YOUR TOUR</h2>
            <form onSubmit={handleSubmit} className="fields">
              <label htmlFor="fromCountry">From</label>
              <input
                type="text"
                id="fromCountry"
                name="fromCountry"
                placeholder="Country"
                value={formData.fromCountry}
                onChange={handleChange}
              />

              <label htmlFor="toCountry">To</label>
              <input
                type="text"
                id="toCountry"
                name="toCountry"
                placeholder="Country"
                value={formData.toCountry}
                onChange={handleChange}
              />

              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />

              <label htmlFor="adults">Adults</label>
              <input
                type="number"
                id="adults"
                name="adults"
                placeholder="Adults"
                value={formData.adults}
                onChange={handleChange}
              />

              <label htmlFor="children">Children</label>
              <input
                type="number"
                id="children"
                name="children"
                placeholder="Children"
                value={formData.children}
                onChange={handleChange}
              />

              <div className="Button">
                <button type="submit">Search Flight</button>
              </div>
            </form>
          </div>
        </div>
      </Dashboard>
    </div>
  );
};

export default Contact;
