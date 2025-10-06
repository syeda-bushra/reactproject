import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#2d3bb3] text-white text-xs w-full py-5">
      <div className="text-center text-gray-300">
        <p className="mb-2">
          <a href="privacy.html" className="mx-2 hover:underline hover:text-white">Privacy Policy</a> |
          <a href="terms.html" className="mx-2 hover:underline hover:text-white">Terms of Service</a> |
          <a href="contact.html" className="mx-2 hover:underline hover:text-white">Contact Us</a>
        </p>

        <p className="opacity-20 text-center my-2">
          _______________________________________________________________________________________________
        </p>
      </div>

      <div className="flex justify-start gap-20 px-10 mt-4">
        <div>
          <h4 className="text-sm font-medium text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="dashboard.html" className="hover:underline hover:text-white">Discover</a></li>
            <li><a href="features.html" className="hover:underline hover:text-white">Tips</a></li>
            <li><a href="pricing.html" className="hover:underline hover:text-white">Review</a></li>
            <li><a href="resources.html" className="hover:underline hover:text-white">Resources</a></li>
            <li><a href="contact.html" className="hover:underline hover:text-white">Contact</a></li>
          </ul>
        </div>

      
        <div>
          <h4 className="text-sm font-mediumtext-white mb-3">Social</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="https://www.facebook.com/" className="hover:underline hover:text-white">Facebook</a></li>
            <li><a href="https://www.instagram.com/accounts/login/?hl=en" className="hover:underline hover:text-white">Instagram</a></li>
            <li><a href="https://pk.linkedin.com/" className="hover:underline hover:text-white">LinkedIn</a></li>
            <li><a href="youtube.html" className="hover:underline hover:text-white">YouTube</a></li>
            <li><a href="https://x.com/" className="hover:underline hover:text-white">X</a></li>
          </ul>
        </div>

        <div className="relative">
          <img
            src="/logo2.png"
            alt="Company Logo"
            className="absolute bottom-[-25px] left-0 h-28 opacity-90"
          />
        </div>
       
        <div className="text-left text-gray-300 ml-auto ">
          <h4 className="text-sm font-medium text-white mb-2">Contact</h4>
          <p className="mb-1"> Shahrah-e-faisal, Block A</p>
          <p className="mb-1"> info@example.com</p>
          <p className="mb-1"> +92 342493002</p>
          <p>+92 334890221</p>
        </div>
      </div>

      <p className="text-center text-gray-400 mt-8 whitespace-nowrap">© 2025 Company. All rights reserved.</p>
    </div>
  );
};

export default Footer;
