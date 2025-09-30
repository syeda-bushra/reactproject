import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./modules/Login";
import Discover from "./modules/Discover";
import Contact from "./modules/Contact";
import Tips from "./modules/Tips";
import Review from "./modules/Review";
import Resources from "./modules/Resources";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/review" element={<Review />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
    </Router>
  );
};

export default App;
