import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20PhysioCare%20home%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
