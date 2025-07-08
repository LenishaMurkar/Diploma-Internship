export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white shadow-md p-6 rounded-xl text-center hover:shadow-lg transition">
      <div className="text-blue-600 text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
