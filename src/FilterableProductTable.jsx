import { SearchBar } from "./components/SearchBar";
import { ProductTable } from "./components/ProductTable";
import { useState } from "react";

function FilterableProductTable() {
  const [searchText, setSearchText] = useState("");
  const [isFilteredByInStock, setIsFilteredByInStock] = useState(false);

  return (
    <div className="p-4 flex items-center  flex-col gap-4">
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        isFilteredByInStock={isFilteredByInStock}
        setIsFilteredByInStock={setIsFilteredByInStock}
      />
      <ProductTable
        searchText={searchText}
        isFilteredByInStock={isFilteredByInStock}
      />
    </div>
  );
}

export default FilterableProductTable;
