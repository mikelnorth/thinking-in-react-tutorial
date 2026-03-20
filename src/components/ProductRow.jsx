import React from "react";

export function ProductRow({ name, price, isInStock }) {
  return (
    <tr className={isInStock ? "" : "text-red-500"}>
      <td className="px-4 py-2 border border-gray-300">{name}</td>
      <td className="px-4 py-2 border border-gray-300">{price}</td>
    </tr>
  );
}
