import Navbar from "./Navbar";
import Footer from "./Footer"; 

const Dashboard = ({ userName,children }) => {
  
  return (
    <div className="page-container">
      <Navbar userName= {userName} />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Dashboard
