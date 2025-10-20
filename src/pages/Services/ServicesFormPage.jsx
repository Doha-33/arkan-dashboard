import GenericFormPage from "../../components/BaseComponents/FullDynamic/GenericFormPage";
import { useState, useEffect } from "react";
import { getAll } from "../../services/apiService";

export default function ServicesFormPage({ mode = "create" }) {
  const isCreate = mode === "create";


 
 const fields = [
  { key: "title", label: "Title", required: 1, placeholder: "Enter Title", type: "text", isString: false },
  { key: "desc", label: "Desc", required: 1, placeholder: "Enter Desc", type: "textarea", isString: false },
  { key: "img", label: "Img", required: 1, placeholder: "Enter Img", type: "img", isString: true },
  { key: "push", label: "Push", required: 1, placeholder: "Enter Push", type: "boolean", isString: false },
  { key: "push_date", label: "Push Date", required: 1, placeholder: "Enter Push Date", type: "date", isString: false }
];


  return (
    <GenericFormPage
      endpoint="services"
      fields={fields}
      title={isCreate ? "Create Services" : "Edit Services"}
      mode={mode}
    />
  );
}
