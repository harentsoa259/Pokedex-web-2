function SearchBar({ onSearch }) {
  return (
    <div className="flex justify-center my-6">
      <input
        type="text"
        placeholder="Search by name or id . . . "
        className="px-4 py-2 border rounded-lg w-80 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-300"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
