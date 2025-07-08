export default function Services() {
  const services = [
    {
      title: "Home Physiotherapy",
      description:
        "Get professional physiotherapy treatment at home. Perfect for patients who need convenience and comfort."
    },
    {
      title: "Orthopedic Physiotherapy",
      description:
        "Treatment for bone and joint conditions including arthritis, sprains, fractures, and post-operative care."
    },
    {
      title: "Neurological Rehabilitation",
      description:
        "Therapy for stroke, Parkinson’s, spinal cord injuries, and other neurological conditions."
    },
    {
      title: "Post-Surgical Rehabilitation",
      description:
        "Recovery and strengthening exercises following joint replacement, spinal, or orthopedic surgeries."
    },
    {
      title: "Geriatric Physiotherapy",
      description:
        "Special care for elderly patients to improve mobility, balance, and independence."
    },
    {
      title: "Sports Injury Therapy",
      description:
        "Rehabilitation for athletes and active individuals recovering from injuries or strain."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Our Services
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
      </div>
    </div>
  );
}
