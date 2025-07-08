export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        We’re here to help you recover better. Feel free to reach out to us with your queries or appointment requests.
      </p>

      <div className="bg-gray-50 p-6 rounded-xl shadow">
        <p className="mb-2"><strong>Email:</strong> support@physiocare.com</p>
        <p className="mb-2"><strong>Phone:</strong> +91 98765 43210</p>
        <p className="mb-2"><strong>Address:</strong> Pune, Maharashtra, India</p>
        <p><strong>Timing:</strong> 9 AM – 7 PM (Mon–Sat)</p>
      </div>
    </div>
  );
}
