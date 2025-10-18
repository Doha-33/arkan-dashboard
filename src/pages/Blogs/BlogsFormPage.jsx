import GenericFormPage from "../../components/BaseComponents/FullDynamic/GenericFormPage";

export default function BlogsFormPage({ mode = "create" }) {
  const isCreate = mode === "create";

    const fields = [
  { key: "name", label: "Name", required: 1, placeholder: "Enter Name", type: "text", isString: false },
  { key: "user_id", label: "User Id", required: 1, placeholder: "Enter User Id", type: "text", isString: false },
  { key: "text", label: "Text", required: 1, placeholder: "Enter Text", type: "textarea", isString: false },
  { key: "push", label: "Push", required: 1, placeholder: "Enter Push", type: "boolean", isString: false },
  { key: "img", label: "Img", required: 1, placeholder: "Enter Img", type: "image", isString: true }
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
