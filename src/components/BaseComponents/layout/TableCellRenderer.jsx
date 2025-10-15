// components/TableCellRenderer.jsx
export default function TableCellRenderer({ type, value, options, onImageClick }) {
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "approved":
      case "approve":
        return "bg-green-100 text-green-800";
      case "rejected":
      case "reject":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  switch (type) {
    case "image":
      return (
        <img
          src={value}
          alt=""
          className="w-10 h-10 object-cover rounded-full border border-gray-300 cursor-pointer transition-transform hover:scale-105"
          onClick={() => onImageClick(value)}
        />
      );

    case "status":
      return (
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium ${getStatusColor(
            value
          )}`}
        >
          {value}
        </span>
      );

    case "boolean":
      return (
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium ${
            value
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {value ? "True" : "False"}
        </span>
      );

    case "select":
       if (options && Array.isArray(options)) {
        const option = options.find((opt) => opt.value === value);
        return (
          <span className="px-2 py-1 rounded text-sm bg-gray-100 text-gray-800">
            {option ? option.label : value}
          </span>
        );
      }
      return <span>{value}</span>;

    default:
      return value;
  }
}
