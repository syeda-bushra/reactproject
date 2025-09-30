import React, { useEffect, useState } from "react";       
import Dashboard from "../components/Dashboard";

const Review = () => {
  const [userName, setUserName] = useState("Guest");
    useEffect(() => {
      const name = localStorage.getItem("loggedInUserName");
      if (name) setUserName(name);
    }, []);
  return (
    <div>
        <Dashboard userName={userName}>

        </Dashboard>
      
    </div>
  )
}

export default Review
