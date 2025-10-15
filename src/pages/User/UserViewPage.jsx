// pages/UserViewPage.jsx
import GenericViewPage from "../../components/BaseComponents/FullDynamic/GenericViewPage";

export default function UserViewPage() {
  const fields = [
    { key: "id", label: "ID" },
    { key: "name", label: "Full Name" },
    { key: "email", label: "Email" },
    { key: "status", label: "Account Status", type: "status" },
    { key: "created_at", label: "Created At", type: "date" },
    { key: "avatar", label: "Profile Picture", type: "img" },
    { key: "roles", label: "Roles", type: "list" },
  ];

  return (
    <GenericViewPage
      entityName="users"
      title="User Details"
      fields={fields}
    />
  );
}
