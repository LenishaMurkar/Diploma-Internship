import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">PhysioCare</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link to="/book" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Book Now</Link>
        </div>
      </div>
    </nav>
  );
}
