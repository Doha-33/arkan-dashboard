import GenericFormPage from "../../components/BaseComponents/FullDynamic/GenericFormPage";

export default function UserFormPage({ mode = "create" }) {
const fields = [
  { key: "name", label: "Name", required: true, placeholder: "Enter name" },
  { key: "email", label: "Email", required: true, placeholder: "Enter email" },
  { key: "password", label: "Password",required:true, type: "password", placeholder: "Enter password" },
  { key: "phone", label: "Phone", required:true ,placeholder: "Enter phone" },
  { key: "coming_affiliate", required:true ,label: "Coming Affiliate", placeholder: "Enter coming affiliate" },
  {
    key: "type",
    label: "User Type",
    type: "select",          
    options: [
      { value: "admin", label: "Admin" },
      { value: "guest", label: "guest" },
      { value: "user", label: "User" },
    ],
    required: true,
  },
];


  return (
    <GenericFormPage
      endpoint="users"
      fields={fields}
      title={mode === "create" ? "Create User" : "Edit User"}
      mode={mode}
    />
  );
}
