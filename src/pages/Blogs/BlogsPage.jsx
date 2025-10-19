import { useParams } from "react-router-dom";
import GenericListPage from "../../components/BaseComponents/FullDynamic/GenericListPage";

export default function BlogsPage() {
  const { type, mode } = useParams(); // ✅ أضف mode هنا
  const isCreate = mode === "create";

  const fields = [
  { key: "name", label: "Name", required: isCreate, placeholder: "Enter Name", type: "text", isString: false },
  { key: "user_id", label: "User Id", required: isCreate, placeholder: "Enter User Id", type: "text", isString: false },
  // { key: "text", label: "Text", required: isCreate, placeholder: "Enter Text", type: "text", isString: false },
  { key: "push", label: "Push", required: isCreate, placeholder: "Enter Push", type: "boolean", isString: false },
  { key: "img", label: "Img", required: isCreate, placeholder: "Enter Img", type: "image", isString: true },
  { key: "service_id", label: "Service Id", required: isCreate, placeholder: "Enter Service Id", type: "text", isString: false },
  { key: "push_date", label: "Push Date", required: isCreate, placeholder: "Enter Push Date", type: "text", isString: false }
];

  return (
    <GenericListPage
      endpoint="blogs"
      params={{ type }}  
      headers={fields}
      title={`All ${type}s`}
    />

  );
}
