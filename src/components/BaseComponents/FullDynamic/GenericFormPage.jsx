import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DynamicForm from "../DynamicForm";
import { getOne, createItem, updateItem } from "../../../services/apiService";

export default function GenericFormPage({ endpoint, fields, title, mode = "create" }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState({});
  const [loading, setLoading] = useState(false);

   useEffect(() => {
    if (mode === "edit" && id) {
      setLoading(true);
      getOne(endpoint, id)
        .then((res) => setInitialData(res))
        .catch((err) => console.error("Error fetching item:", err))
        .finally(() => setLoading(false));
    }
  }, [endpoint, id, mode]);

   const handleSubmit = async (data) => {
    try {
      if (mode === "create") {
        await createItem(endpoint, data);
        showToast("✅ Created successfully!", "success");
      } else if (mode === "edit" && id) {
        await updateItem(endpoint, id, data);
        showToast("✅ Updated successfully!", "success");
      }
      navigate(`/${endpoint}`);
    } catch (error) {
      console.error("Error saving data:", error);

      if (error.response?.data?.error) {
         return { error: error.response.data.error };
      }

      showToast("❌ Something went wrong while saving!", "error");
    }
  };

   const showToast = (message, type = "success") => {
    const bgColor =
      type === "success"
        ? "bg-green-600"
        : type === "error"
        ? "bg-red-600"
        : "bg-gray-700";

    const toast = document.createElement("div");
    toast.textContent = message;
    toast.className = `${bgColor} text-white px-4 py-2 rounded-lg fixed bottom-5 right-5 shadow-lg animate-fade-in`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("opacity-0", "transition", "duration-500");
      setTimeout(() => toast.remove(), 500);
    }, 2500);
  };

  if (loading) return <p className="p-4 text-gray-500">Loading...</p>;

  return (
    <DynamicForm
      fields={fields}
      mode={mode}
      initialData={initialData}
      onSubmit={handleSubmit}
      title={title || (mode === "create" ? "Create" : "Edit")}
    />
  );
}
