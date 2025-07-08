import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { FaRunning, FaHeartbeat, FaHandHoldingMedical } from "react-icons/fa";

export default function Home() {
  return (
    <div className="px-4 py-10">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to PhysioCare</h1>
        <p className="text-gray-600 text-lg mb-6">Personalized physiotherapy at your doorstep</p>
        <Link to="/book">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Book Appointment
          </button>
        </Link>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ServiceCard icon={<FaRunning />} title="Orthopedic Therapy" description="Rehabilitation for bones, joints, and muscles." />
          <ServiceCard icon={<FaHeartbeat />} title="Cardiac Rehab" description="Therapy for heart recovery post-surgery or illness." />
          <ServiceCard icon={<FaHandHoldingMedical />} title="Home Care" description="Trusted home visits for comfort and care." />
        </div>
      </section>
    </div>
  );
}
