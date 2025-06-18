import React from "react";

const CategoryFilter = ({ categories, onFilterChange }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    onFilterChange(value === "" ? null : parseInt(value));
  };

  return (
    <select
      onChange={handleChange}
      className="select my-4 border-[#767676] border-[1px] rounded-md w-full p-2"
      id="categoriesSection"
    >
      <option value="">Toutes les catégories</option>
      {categories.map((cat) => (
        <option key={cat.id} value={cat.id}>
          {cat.name}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
