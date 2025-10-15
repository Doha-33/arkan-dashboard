import GenericFormPage from "../../components/BaseComponents/FullDynamic/GenericFormPage";

export default function UserFormPage({ mode = "create" }) {
  const isCreate = mode === "create";

  const fields = [
    { key: "name", label: "Name", required: isCreate, placeholder: "Enter name" },
    { key: "email", label: "Email", required: isCreate, placeholder: "Enter email" },
    { key: "img", label: "image", required: isCreate, placeholder: "Enter image" ,type:"file" },
    { key: "password", label: "Password", required: isCreate, type: "password", placeholder: "Enter password" },
    { key: "phone", label: "Phone", required: isCreate, placeholder: "Enter phone" },
    { key: "coming_affiliate", label: "Coming Affiliate", required: isCreate, placeholder: "Enter coming affiliate" },
    { key: "active", label: "Active", required: isCreate, placeholder: "active", type:"boolean" },
    {
      key: "type",
      label: "User Type",
      type: "select",
      options: [
        { value: "admin", label: "Admin" },
        { value: "guest", label: "Guest" },
        { value: "user", label: "User" },
      ],
      required: isCreate,
    },
  ];

  return (
    <GenericFormPage
      endpoint="users"
      fields={fields}
      title={isCreate ? "Create User" : "Edit User"}
      mode={mode}
    />
  );
}
