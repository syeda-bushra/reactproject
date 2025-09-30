import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        
        <p>
          <a href="privacy.html">Privacy Policy</a> | 
          <a href="terms.html"> Terms of Service</a> | 
          <a href="contact.html"> Contact Us</a>
        </p>

        <p className="footer-line">
          _______________________________________________________________________________________________
        </p>

   
        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="dashboard.html">Discover</a></li>
              <li><a href="features.html">Tips</a></li>
              <li><a href="pricing.html">Review</a></li>
              <li><a href="resources.html">Resources</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Social</h4>
            <ul>
              <li><a href="https://www.facebook.com/">Facebook</a></li>
              <li><a href="https://www.instagram.com/accounts/login/?hl=en">Instagram</a></li>
              <li><a href="https://pk.linkedin.com/">LinkedIn</a></li>
              <li><a href="youtube.html">YouTube</a></li>
              <li><a href="https://x.com/">X</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-logo">
          <img src="/logo2.png" alt="Company Logo" />
        </div>

        <div className="footer-right">
          <h4>Contact</h4>
          <p><i className="home"></i> Shahrah-e-faisal, Block A</p>
          <p><i className="email"></i> info@example.com</p>
          <p><i className="phone"></i> +92 342493002</p>
          <p><i className="phone2"></i> +92 334890221</p>
        </div>

 
        <p className="copy">© 2025 Company. All rights reserved.</p>

      </div>
    </div>
  );
};

export default Footer;
