import { useParams } from "react-router-dom";
import GenericListPage from "../../components/BaseComponents/FullDynamic/GenericListPage";

export default function ServicesPage() {
  const { type, mode } = useParams(); // ✅ أضف mode هنا
  const isCreate = mode === "create";

   const fields = [
  { key: "title", label: "Title", required: 1, placeholder: "Enter Title", type: "text", isString: false },
  { key: "desc", label: "Desc", required: 1, placeholder: "Enter Desc", type: "textarea", isString: false },
  { key: "img", label: "Img", required: 1, placeholder: "Enter Img", type: "img", isString: true },
  { key: "push", label: "Push", required: 1, placeholder: "Enter Push", type: "boolean", isString: false },
  { key: "push_date", label: "Push Date", required: 1, placeholder: "Enter Push Date", type: "date", isString: false }
];



  return (
    <GenericListPage
      endpoint="services"
      params={{ type }}  
      headers={fields}
      title={`All ${type}s`}
    />

  );
}
