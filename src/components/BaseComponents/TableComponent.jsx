import { useState } from "react";
import TableCellRenderer from "./layout/TableCellRenderer";
import ModalPreview from "./layout/ModalPreview";

export default function TableComponent({ headers, data, onEdit, onDelete, onView }) {
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <div className="overflow-x-auto relative">
      <ModalPreview image={previewImage} onClose={() => setPreviewImage(null)} />

      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2 text-left font-semibold border-b border-gray-200"
              >
                {header.label}
              </th>
            ))}
            <th className="px-4 py-2 text-left font-semibold border-b border-gray-200">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={headers.length + 1}
                className="text-center py-6 text-gray-400"
              >
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`hover:bg-gray-50 ${
                  rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                {headers.map((header, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 py-2 border-b border-gray-200"
                  >
                    <TableCellRenderer
                      type={header.type}
                      value={row[header.key] ?? "-"}
                      onImageClick={setPreviewImage}
                    />
                  </td>
                ))}

                <td className="px-4 py-2 border-b border-gray-200 space-x-2">
                  {onView && (
                    <button
                      onClick={() => onView(row)}
                      className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600"
                    >
                      View
                    </button>
                  )}
                  {onEdit && (
                    <button
                      onClick={() => onEdit(row)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                    >
                      Edit
                    </button>
                  )}
                  {onDelete && (
                    <button
                      onClick={() => onDelete(row)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
