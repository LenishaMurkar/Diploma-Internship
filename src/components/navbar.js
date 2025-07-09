import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
  <img src="/logo192.png" alt="PhysioCare Logo" className="h-28 w-25" />
  <span className="text-xl font-bold text-blue-600">PhysioCare</span>
</Link>


        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl text-gray-700" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>

          <Link to="/book" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Book Now</Link>
          <Link to="/enquiry" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Enquiry</Link>
          <a
            href="https://wa.me/919607460621?text=Hi%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20PhysioCare%20home%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Whatsapp
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          <Link to="/" onClick={toggleMenu} className="block text-purple-900">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="block text-purple-900">About Us</Link>
          <Link to="/services" onClick={toggleMenu} className="block text-purple-900">Services</Link>
          <Link to="/contact" onClick={toggleMenu} className="block  text-red-900">Contact Us</Link>

          <Link to="/book" onClick={toggleMenu} className="block text-red-900">Book Now</Link>
          <Link to="/enquiry" onClick={toggleMenu} className="block text-red-900 ">Enquiry</Link>
          <a
            href="https://wa.me/919607460621?text=Hi%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20PhysioCare%20home%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-green-600
            "
          >
            Whatsapp
          </a>
        </div>
      )}
    </nav>
  );
}
