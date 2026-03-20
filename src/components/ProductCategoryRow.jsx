import React from "react";

export function ProductCategoryRow({ category }) {
  return (
    <tr>
      <td colSpan={2} className="text-center bg-gray-100">
        {category}
      </td>
    </tr>
  );
}
