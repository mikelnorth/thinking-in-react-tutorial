import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";

const products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export function ProductTable({ searchText, isFilteredByInStock }) {
  const filteredAndSortedProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const passesStockFilter = !(!product.stocked && isFilteredByInStock);
      return matchesSearch && passesStockFilter;
    })
    .reduce((productsByCategory, currentProduct) => {
      if (!productsByCategory[currentProduct.category]) {
        productsByCategory[currentProduct.category] = [currentProduct];
      } else {
        productsByCategory[currentProduct.category].push(currentProduct);
      }
      return productsByCategory;
    }, {});

  return (
    <table className="border-collapse border border-gray-300 w-60 table-fixed">
      <thead className="bg-gray-300">
        <tr className="border-b border-gray-300">
          <th className="px-4 py-2 border border-gray-300">Name</th>
          <th className="px-4 py-2 border border-gray-300">Price</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(filteredAndSortedProducts).map(
          ([category, products], index) => {
            console.log({ category, products });
            return (
              <ProductRowWrapper
                key={`${category}-${index}`}
                category={category}
                products={products}
              />
            );
          },
        )}
      </tbody>
    </table>
  );
}

function ProductRowWrapper({ category, products }) {
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
