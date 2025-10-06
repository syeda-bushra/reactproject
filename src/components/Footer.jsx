import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#2d3bb3] text-white text-xs py-5">
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
            <li><a href="/discover" className="hover:underline hover:text-white">Discover</a></li>
            <li><a href="/tips" className="hover:underline hover:text-white">Tips</a></li>
            <li><a href="/review" className="hover:underline hover:text-white">Review</a></li>
            <li><a href="./resources" className="hover:underline hover:text-white">Resources</a></li>
            <li><a href="#" className="hover:underline hover:text-white">Contact</a></li>
            
          </ul>
        </div>
      
        <div>
          <h4 className="text-sm font-medium text-white mb-3">Social</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="https://www.facebook.com/" className="hover:underline hover:text-white">Facebook</a></li>
            <li><a href="https://www.instagram.com/accounts/login/?hl=en" className="hover:underline hover:text-white">Instagram</a></li>
            <li><a href="https://pk.linkedin.com/" className="hover:underline hover:text-white">LinkedIn</a></li>
            <li><a href="youtube.html" className="hover:underline hover:text-white">YouTube</a></li>
            <li><a href="https://x.com/" className="hover:underline hover:text-white">X</a></li>
          </ul>
        </div>

        <div className="text-left text-gray-300 ml-auto mr-10">
          <h4 className="text-sm font-medium text-white mb-3">Contact</h4>
          <p className="mb-2"> Shahrah-e-faisal, Block A</p>
          <p className="mb-2"> info@example.com</p>
          <p className="mb-2"> +92 342493002</p>
          <p>+92 334890221</p>
        </div>
      </div>

      <p className="text-center text-gray-400 mt-8 whitespace-nowrap">© 2025 Company. All rights reserved.</p>
    </div>
  );
};

export default Footer;
