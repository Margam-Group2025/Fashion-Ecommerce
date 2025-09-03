import React from "react";
const Badge = ({ status }) => {
  const styles = {
    pending: "bg-yellow-500 text-white",
    confirm: "bg-green-400 text-white",
    delivered: "bg-green-700 text-white",
  };

  return (
    <span
      className={`inline-block py-1 px-4 rounded-full text-[11px] capitalize ${
        styles[status?.toLowerCase()] || "bg-gray-300 text-black"
      }`}
    >
      {status}
    </span>
  );
};

export default Badge;
