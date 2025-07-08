import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function BookAppointment() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Connect to backend API here
    alert("Appointment request submitted!");
    setForm({ name: "", phone: "", date: "", message: "" });
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-8 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold mb-4 text-center">Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <InputField label="Full Name" type="text" name="name" value={form.name} onChange={handleChange} />
        <InputField label="Phone Number" type="tel" name="phone" value={form.phone} onChange={handleChange} />
        <InputField label="Preferred Date" type="date" name="date" value={form.date} onChange={handleChange} />
        <InputField label="Message (Optional)" type="text" name="message" value={form.message} onChange={handleChange} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
