import { useState, useEffect } from "react";
import FormFieldRenderer from "./layout/FormFieldRenderer";

export default function DynamicForm({
  fields,
  initialData = {},
  onSubmit,
  title,
  isView = false,
}) {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState("");

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
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
      const firstErrorKey = Object.keys(result.error)[0];
      const element = document.querySelector(`[name="${firstErrorKey}"]`);
      if (element) element.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      setErrors({});
      setGeneralError("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-100 space-y-6 transition-all"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          {title}
        </h2>

        {generalError && (
          <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
            {generalError}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {fields.map((field) => (
            <div
              key={field.key}
              className="bg-gray-50/60 rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <FormFieldRenderer
                field={field}
                value={formData[field.key]}
                onChange={handleChange}
                error={errors[field.key]}
                disabled={isView}
              />
            </div>
          ))}
        </div>

        {!isView && (
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-8 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all font-medium"
            >
              Save Changes
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
