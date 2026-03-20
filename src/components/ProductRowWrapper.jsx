import React from "react";

export function ProductRowWrapper({ category, products }) {
  return (
    <>
      <ProductCategoryRow category={category} />
      {products?.map((product, index) => {
        return (
          <ProductRow
            key={`${product.name}-${index}`}
            name={product.name}
            price={product.price}
            isInStock={product.stocked}
          />
        );
      })}
    </>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <td colSpan={2} className="text-center bg-gray-100">
        {category}
      </td>
    </tr>
  );
}

function ProductRow({ name, price, isInStock }) {
  return (
    <tr className={isInStock ? "" : "text-red-500"}>
      <td className="px-4 py-2 border border-gray-300">{name}</td>
      <td className="px-4 py-2 border border-gray-300">{price}</td>
    </tr>
  );
}
