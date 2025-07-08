import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

export default function Enquiry() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend API here
    alert("Enquiry submitted successfully!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-8 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-semibold mb-4 text-center">Enquiry Form</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <InputField
          label="Phone Number"
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        <InputField
          label="Message"
          type="text"
          name="message"
          value={form.message}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
