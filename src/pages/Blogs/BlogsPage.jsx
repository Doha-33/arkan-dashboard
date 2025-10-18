import { useParams } from "react-router-dom";
import GenericListPage from "../../components/BaseComponents/FullDynamic/GenericListPage";

export default function BlogsPage() {
  const { type } = useParams();  

 const fields = [
  { key: "name", label: "Name", required: 1, placeholder: "Enter Name", type: "text", isString: false },
  { key: "user_id", label: "User Id", required: 1, placeholder: "Enter User Id", type: "text", isString: false },
  { key: "text", label: "Text", required: 1, placeholder: "Enter Text", type: "textarea", isString: false },
  { key: "push", label: "Push", required: 1, placeholder: "Enter Push", type: "boolean", isString: false },
  { key: "img", label: "Img", required: 1, placeholder: "Enter Img", type: "image", isString: true }
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
