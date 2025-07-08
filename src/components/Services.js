import ServiceCard from "../components/ServiceCard";
import { FaWheelchair, FaUserMd, FaBaby } from "react-icons/fa";

export default function Services() {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">Our Physiotherapy Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard icon={<FaWheelchair />} title="Neurological Therapy" description="Treatment for stroke, paralysis, Parkinson’s etc." />
        <ServiceCard icon={<FaUserMd />} title="Post-Surgery Rehab" description="Faster recovery from knee, spine or shoulder surgeries." />
        <ServiceCard icon={<FaBaby />} title="Pediatric Physiotherapy" description="Gentle therapy for babies and children." />
      </div>
    </div>
  );
}
