import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOne } from "../../../services/apiService"; 

export default function GenericViewPage({ entityName, title, fields }) {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getOne(entityName, id);
        setData(res);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [entityName, id]);

  if (loading) return <div className="p-10 text-center text-gray-500">Loading...</div>;
  if (!data) return <div className="p-10 text-center text-gray-500">No data found.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">{title}</h2>

        {/* معلومات عامة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fields.map((field) => {
            const value = data[field.key];
            return (
              <div
                key={field.key}
                className="bg-gray-50/70 rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <label className="block text-sm font-semibold text-gray-500 mb-2">
                  {field.label}
                </label>

                <ValueRenderer type={field.type} value={value} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

 function ValueRenderer({ type, value }) {
  if (value === null || value === undefined || value === "") {
    return <span className="text-gray-400 italic">No data</span>;
  }

  switch (type) {
    case "image":
    case "img":
      return (
        <img
          src={value}
          alt="preview"
          className="w-32 h-32 object-cover rounded-lg border mx-auto"
        />
      );

    case "status":
      const color =
        value === "active"
          ? "bg-green-100 text-green-700"
          : value === "pending"
          ? "bg-yellow-100 text-yellow-700"
          : "bg-red-100 text-red-700";
      return (
        <span
          className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${color}`}
        >
          {value}
        </span>
      );

    case "date":
      return (
        <span className="text-gray-800 font-medium">
          {new Date(value).toLocaleString()}
        </span>
      );

    case "list":
      return (
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {value.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      );

    case "boolean":
      return (
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            value ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {value ? "Yes" : "No"}
        </span>
      );

    default:
      return <span className="text-gray-800 font-medium break-words">{value}</span>;
  }
}
