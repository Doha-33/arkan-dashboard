import GenericFormPage from "../../components/BaseComponents/FullDynamic/GenericFormPage";
import { useState, useEffect } from "react";
import { getAll } from "../../services/apiService";

export default function BlogsFormPage({ mode = "create" }) {
  const isCreate = mode === "create";
  const [servicesOptions, setServicesOptions] = useState([]);

  useEffect(() => {
    getAll("services")
      .then((res) => {
        const formatted = res.map((s) => ({
          label: s.title || s.name,
          value: s.id,
        }));
        setServicesOptions(formatted);
      })
      .catch((err) => console.error("Error fetching services:", err));
  }, []);
   const fields = [
  { key: "name", label: "Name", required: isCreate, placeholder: "Enter Name", type: "text", isString: false },
  // { key: "user_id", label: "User Id", required: isCreate, placeholder: "Enter User Id", type: "text", isString: false },
  { key: "text", label: "Text", required: isCreate, placeholder: "Enter Text", type: "text", isString: false },
  { key: "push", label: "Push", required: isCreate, placeholder: "Enter Push", type: "boolean", isString: false },
  { key: "img", label: "Img", required: isCreate, placeholder: "Enter Img", type: "img", isString: true },
{
      key: "service_id",
      label: "Service",
      required: isCreate,
      placeholder: "Select Service",
      type: "select",
      options: servicesOptions, // ✅ هنا بنمرر الداتا
    },
  { key: "push_date", label: "Push Date", required: isCreate, placeholder: "Enter Push Date", type: "date", isString: false }
];
  return (
    <GenericFormPage
      endpoint="blogs"
      fields={fields}
      title={isCreate ? "Create Blogs" : "Edit Blogs"}
      mode={mode}
    />
  );
}
