import { useState } from "react";

export default function Contact() {
  const [callbackForm, setCallbackForm] = useState({ name: "", phone: "" });

  const handleChange = (e) => {
    setCallbackForm({ ...callbackForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Callback request submitted!");
    setCallbackForm({ name: "", phone: "" });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
       <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Contact Us
      </h1>
      <p className="text-gray-700 mb-6">
        We’re here to help you recover better. Feel free to reach out to us with your queries or appointment requests.
      </p>

      <div className="bg-gray-50 p-6 rounded-xl shadow space-y-6">
        <div>
          <p className="mb-2"><strong>Email:</strong> support@physiocare.com</p>
          <p className="mb-2"><strong>Phone:</strong> +91 98765 43210</p>
          <p className="mb-2"><strong>Address:</strong> Pune, Maharashtra, India</p>
          <p><strong>Timing:</strong> 9 AM – 7 PM (Mon–Sat)</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Pimpri Clinic</h3>
          <p className="mb-1"><strong>Phone:</strong> +91 96111 12225</p>
          <p>Telco Ground, Ajmera,</p>
          <p>Masulkar Colony, Pimpri 411018</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Krushna Nagar Clinic</h3>
          <p className="mb-1"><strong>Phone:</strong> +91 80000 44557</p>
          <p>Krushna Nagar, Pune 411018</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Request a Callback</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                value={callbackForm.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={callbackForm.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
