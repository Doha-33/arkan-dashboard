import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TableComponent from "../TableComponent";
import { getAll, deleteItem } from "../../../services/apiService";

export default function GenericListPage({ endpoint, headers, title }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

   const loadData = async () => {
    try {
      const response = await getAll(endpoint);
      setData(response);
    } catch (error) {
      console.error(`Error loading ${endpoint}:`, error);
    }
  };

  useEffect(() => {
    loadData();
  }, [endpoint]);

  // تعديل
  const handleEdit = (row) => {
    navigate(`/${endpoint}/edit/${row.id}`);
  };

  // حذف
  const handleDelete = async (row) => {
    if (confirm(`هل أنت متأكد من حذف العنصر: ${row.name || row.id}؟`)) {
      await deleteItem(endpoint, row.id);
      loadData();
    }
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">{title || endpoint}</h1>

        <button
          onClick={() => navigate(`/${endpoint}/create`)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Create
        </button>
      </div>

      <TableComponent
        headers={headers}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
