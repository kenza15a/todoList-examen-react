import React from "react";

const CategoryFilter = ({ categories, onFilterChange }) => {
  return (
    <select
      onChange={(e) => onFilterChange(e.target.value)}
      className="select mb-4 border-[#767676] border-[1px] rounded-md w-full p-2"
    >
      {/* Option for "All Categories" */}
      <option value="">Toutes les catégories</option>

      {/* Render category options */}
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
