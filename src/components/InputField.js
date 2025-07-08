export default function InputField({ label, type, name, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
}
