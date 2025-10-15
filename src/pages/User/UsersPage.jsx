import { useParams } from "react-router-dom";
import GenericListPage from "../../components/BaseComponents/FullDynamic/GenericListPage";

export default function UsersPage() {
  const { type } = useParams();  

  const headers = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "img", label: "Image", type: "image" },
    { key: "affiliate_code", label: "Affiliate Code" },
    { key: "coming_affiliate", label: "Coming Affiliate" },
    { key: "active", label: "Active", type: "boolean" },
    { key: "verified_kyc", label: "Verified KYC", type: "boolean" },
  ];

  return (
    <GenericListPage
      endpoint="users"
      params={{ type }} // ✅ ابعت النوع هنا
      headers={headers}
      title={`All ${type}s`}
    />

  );
}
