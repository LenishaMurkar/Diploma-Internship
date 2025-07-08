// AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/AboutUs';
import Contact from './components/Contact';
import Services from './components/Services';
import BookAppointment from './components/BookApointment';
import NotFound from "./components/NotFound";
import Enquiry from "./components/Enquire";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book" element={<BookAppointment />} />
      <Route path="/enquiry" element={<Enquiry />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
