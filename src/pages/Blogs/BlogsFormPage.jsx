import GenericFormPage from "../../components/BaseComponents/FullDynamic/GenericFormPage";
import { useState, useEffect } from "react";
import { getAll } from "../../services/apiService";

export default function BlogsFormPage({ mode = "create" }) {
  const isCreate = mode === "create";
  const [blogsOptions, setBlogsOptions] = useState([]);

  useEffect(() => {
    getAll("blogs")
      .then((res) => {
        const formatted = res.map((s) => ({
          label: s.title || s.name,
          value: s.id,
        }));
        setBlogsOptions(formatted);
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);
 const fields = [
  { key: "name", label: "Name", required: 1, placeholder: "Enter Name", type: "text", isString: false },
  { key: "user_id", label: "User Id", required: 1, placeholder: "Enter User Id", type: "text", isString: false },
  { key: "text", label: "Text", required: 1, placeholder: "Enter Text", type: "text", isString: false },
  { key: "push", label: "Push", required: 1, placeholder: "Enter Push", type: "boolean", isString: false },
  { key: "img", label: "Img", required: 1, placeholder: "Enter Img", type: "img", isString: true },
  { key: "service_id", label: "Service Id", required: 1, placeholder: "Enter Service Id", type: "text", isString: false },
  { key: "push_date", label: "Push Date", required: 1, placeholder: "Enter Push Date", type: "text", isString: false }
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
