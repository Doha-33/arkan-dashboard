import { useState } from "react";

export default function DynamicForm({ fields, initialData = {}, onSubmit, title, isView = false }) {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));

    // إزالة الخطأ عند تعديل الحقل
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[key];
      return newErrors;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await onSubmit(formData);

    if (result && result.error) {
      setErrors(result.error);
      setGeneralError("Please correct the highlighted fields.");

      // scroll لأول خطأ
      const firstErrorKey = Object.keys(result.error)[0];
      const element = document.querySelector(`[name="${firstErrorKey}"]`);
      if (element) element.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      setErrors({});
      setGeneralError("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {generalError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          {generalError}
        </div>
      )}

      {fields.map((field) => (
        <div key={field.key} className="flex flex-col">
          <label className="mb-1 font-medium">
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </label>

          <input
            name={field.key}
            type={field.type || "text"}
            value={formData[field.key] || ""}
            disabled={isView}
            onChange={(e) => handleChange(field.key, e.target.value)}
            placeholder={field.placeholder || ""}
            className={`border rounded-lg p-2 focus:ring focus:ring-blue-300 ${
              errors[field.key] ? "border-red-500" : ""
            }`}
          />

          {errors[field.key] && (
            <span className="text-red-500 text-sm mt-1">{errors[field.key][0]}</span>
          )}
        </div>
      ))}

      {!isView && (
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
        >
          Save
        </button>
      )}
    </form>
  );
}
