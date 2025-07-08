import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaStethoscope, FaRunning, FaUserNurse } from "react-icons/fa";

export default function Home() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* HERO SECTION */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4 leading-tight">
          Your Recovery, Our Priority.
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold text-blue-600">PhysioCare</span> – expert physiotherapy care from the comfort of your home. Regain your strength, relieve pain, and live better with our personalized treatments.
        </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
      <Link to="/book" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Book an Appointment</Link>
          <Link to= "/enquiry" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Make an Enquiry</Link>
          <a
        href="https://wa.me/919607460621?text=Hi%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%20PhysioCare%20home%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition">Chat with us on Whatsapp</a>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-blue-50 py-10 px-4 rounded-xl shadow-sm mt-16">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-8">
          Why Choose PhysioCare?
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-blue-600 mb-2">
              <FaHome size={36} className="mx-auto" />
            </div>
            <h3 className="font-semibold text-lg">Home Visits</h3>
            <p className="text-gray-600 text-sm">
              No travel. Get professional care right at your doorstep.
            </p>
          </div>
          <div>
            <div className="text-blue-600 mb-2">
              <FaStethoscope size={36} className="mx-auto" />
            </div>
            <h3 className="font-semibold text-lg">Certified Experts</h3>
            <p className="text-gray-600 text-sm">
              Trusted and qualified physiotherapists for every condition.
            </p>
          </div>
          <div>
            <div className="text-blue-600 mb-2">
              <FaRunning size={36} className="mx-auto" />
            </div>
            <h3 className="font-semibold text-lg">Personalized Treatment</h3>
            <p className="text-gray-600 text-sm">
              Tailored therapy plans for pain relief and recovery.
            </p>
          </div>
          <div>
            <div className="text-blue-600 mb-2">
              <FaUserNurse size={36} className="mx-auto" />
            </div>
            <h3 className="font-semibold text-lg">Elderly Care</h3>
            <p className="text-gray-600 text-sm">
              Specialized geriatric care to improve mobility and balance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA TO SERVICES */}
       <div className="text-center mt-16">
         <h1 className="text-sm font-medium text-gray-700 mb-3">
          Want to explore our full list of treatments?
        </h1>
        <Link
          to="/services"
         className="text-xl text-blue-500 font-medium underline hover:text-blue-800"
        >
          Explore All Services →
        </Link>
      </div>
    </div>
  );
}





