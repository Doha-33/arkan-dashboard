import { useState, useEffect } from "react";

export default function FormFieldRenderer({ field, value, onChange, error, disabled = false }) {
  const { key, label, type = "text", placeholder, options = [], required } = field;
  const [preview, setPreview] = useState(null);

  // تحديث المعاينة عند تحميل القيمة من السيرفر (edit mode)
  useEffect(() => {
    if (typeof value === "string" && (type === "file" || type === "img")) {
      setPreview(value);
    }
  }, [value, type]);

  // التعامل مع رفع الصور
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
      onChange(key, file);
    }
  };

  // 🔘 شكل Toggle احترافي
  const renderToggle = () => (
    <div className="flex items-center justify-between">
      <label className="font-medium">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <button
        type="button"
        onClick={() => onChange(key, !value)}
        disabled={disabled}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          value ? "bg-green-500" : "bg-gray-300"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            value ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );

  // 🧱 اختيار شكل الحقل بناءً على النوع
  switch (type) {
    case "select":
      return (
        <div className="flex flex-col">
          <label className="mb-1 font-medium">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>

          <select
            name={key}
            value={value || ""}
            onChange={(e) => onChange(key, e.target.value)}
            disabled={disabled}
            className={`border rounded-lg p-2 focus:ring focus:ring-blue-300 ${
              error ? "border-red-500" : ""
            }`}
          >
            <option value="">Select {label}</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          {error && <span className="text-red-500 text-sm mt-1">{error[0]}</span>}
        </div>
      );

    case "file":
    case "img":
      return (
        <div className="flex flex-col">
          <label className="mb-1 font-medium">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>

          {/* عرض المعاينة فوق */}
          {preview && (
            <div className="mb-3 flex justify-center">
              <img
                src={preview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-xl border border-gray-300 shadow-sm"
              />
            </div>
          )}

          <input
            type="file"
            name={key}
            accept="image/*"
            onChange={handleFileChange}
            disabled={disabled}
            className={`border rounded-lg p-2 focus:ring focus:ring-blue-300 ${
              error ? "border-red-500" : ""
            }`}
          />

          {error && <span className="text-red-500 text-sm mt-1">{error[0]}</span>}
        </div>
      );

    case "boolean":
      return renderToggle();

    default:
      return (
        <div className="flex flex-col">
          <label className="mb-1 font-medium">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>

          <input
            type={type}
            name={key}
            value={value || ""}
            onChange={(e) => onChange(key, e.target.value)}
            disabled={disabled}
            placeholder={placeholder || ""}
            className={`border rounded-lg p-2 focus:ring focus:ring-blue-300 ${
              error ? "border-red-500" : ""
            }`}
          />

          {error && <span className="text-red-500 text-sm mt-1">{error[0]}</span>}
        </div>
      );
  }
}
