export function SearchBar({
  searchText,
  isFilteredByInStock,
  setSearchText,
  setIsFilteredByInStock,
}) {
  function handleSearchInput(event) {
    setSearchText(event.target.value);
  }
  return (
    <div className="flex items-center gap-2 flex-col">
      <input
        className="p-1 w-full border border-gray-300 rounded-md"
        id="search-input"
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchInput}
      />
      <label className="flex gap-2">
        <input
          type="checkbox"
          value={isFilteredByInStock}
          onChange={(e) => setIsFilteredByInStock(e.target.checked)}
        />
        only show products in stock
      </label>
    </div>
  );
}
