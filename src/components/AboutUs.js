import React from "react";

const About = () => {

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        About PhysioCare
      </h1>

      <p className="text-gray-700 text-lg mb-4">
        At <span className="font-semibold text-blue-600">PhysioCare</span>, we believe that healing should begin in the comfort of your own home. We are a team of certified and passionate physiotherapists dedicated to delivering personalized, effective, and compassionate care to help you regain your mobility, strength, and independence.
      </p>

      <p className="text-gray-700 text-lg mb-4">
        Whether you’re recovering from surgery, managing a chronic condition, or simply need pain relief from your daily routine, our in-home physiotherapy services are designed to meet your unique needs. We bring advanced techniques, modern equipment, and a human touch to your doorstep.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-3">
        Our Mission
      </h2>
      <p className="text-gray-700 text-lg mb-4">
        Our mission is to make physiotherapy more accessible and effective by removing the barriers of travel and discomfort. We aim to provide convenient, consistent, and quality care that empowers our patients to live healthier, more active lives.
      </p>

      <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-3">
        Why Choose Us?
      </h2>
      <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
        <li>✔️ Certified and experienced physiotherapists</li>
        <li>✔️ Personalized one-on-one sessions at your home</li>
        <li>✔️ Affordable and transparent pricing</li>
        <li>✔️ Treatment plans tailored to your recovery goals</li>
        <li>✔️ Special care for seniors, post-surgery patients, and chronic pain sufferers</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-3">
        Areas We Serve
      </h2>
      <p className="text-gray-700 text-lg mb-6">
        We currently provide home physiotherapy services across <strong>Pune</strong> including Baner, Aundh, Pimpri-Chinchwad, Wakad, Hinjawadi, and surrounding areas.
      </p>

      <p className="text-gray-700 text-lg mb-8">
        We look forward to being a part of your healing journey.
        <br />
        <span className="font-semibold text-blue-700">– The PhysioCare Team</span>
      </p>

    </div>
  );
};

export default About;
