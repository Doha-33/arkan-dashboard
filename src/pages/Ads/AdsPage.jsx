import { useParams } from "react-router-dom";
import GenericListPage from "../../components/BaseComponents/FullDynamic/GenericListPage";

export default function adsPage() {
  const { type } = useParams();  

 const fields = [
  { key: "title", label: "Title", required: 1, placeholder: "Enter Title", type: "text", isString: false },
  { key: "desc", label: "Desc", required: 1, placeholder: "Enter Desc", type: "textarea", isString: false },
  { key: "img", label: "Img", required: 1, placeholder: "Enter Img", type: "image", isString: true },
  { key: "active", label: "Active", required: 1, placeholder: "Enter Active", type: "boolean", isString: false },
  { key: "url", label: "Url", required: 1, placeholder: "Enter Url", type: "text", isString: false },
  { key: "expire", label: "Expire", required: 1, placeholder: "Enter Expire", type: "text", isString: false }
];


  return (
    <GenericListPage
      endpoint="ads"
      params={{ type }} // ✅ ابعت النوع هنا
      headers={fields}
      title={`All ${type}s`}
    />

  );
}
