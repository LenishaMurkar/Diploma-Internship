import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLocationOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo & Name */}
        <div className="flex items-center mb-6">
          <img src="/logo192.png" alt="PhysioCare Logo" className="h-12 rounded-lg" />
          <h2 className="text-xl font-bold ml-4 text-white">PhysioCare Home Services</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/services" className="hover:text-white">Our Services</a></li>
               <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="/book" className="hover:text-white">Book Appointment</a></li>
              <li><a href="/enquiry" className="hover:text-white">Enquiry Form</a></li>
              <li>
                 <a href="https://wa.me/919607460621?text=Hi%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20PhysioCare%20home%20services"
                 target="_blank" rel="noopener noreferrer"
                 className="hover:text-white">
                        Whatsapp
                     </a>
               </li>
               <li><a href="/contact" className="hover:text-white">Request Callback</a></li>
            </ul>
          </div>

          {/* Contact 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Pimpri Clinic</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><FaPhone className="mr-2" /> +91 96111 12225</li>
              <li className="flex items-start">
                <IoLocationOutline className="mr-2 mt-1" />
                <span>Telco Ground, Ajmera,<br /> Masulkar Colony, Pimpri 411018</span>
              </li>
            </ul>
          </div>

          {/* Contact 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Krushna Nagar Clinic</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><FaPhone className="mr-2" /> +91 80000 44557</li>
              <li className="flex items-center"><IoLocationOutline className="mr-2" /> Krushna Nagar, Pune 411018</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/" className="hover:text-blue-500"><FaFacebook size={24} /></a>
              <a href="mailto:physiocare@email.com" className="hover:text-white"><FaEnvelope size={24} /></a>
              <a href="https://instagram.com/" className="hover:text-pink-500"><FaInstagram size={24} /></a>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20PhysioCare%20services"
                className="hover:text-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} PhysioCare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
