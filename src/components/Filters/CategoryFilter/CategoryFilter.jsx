import React from "react";
import Select from "../../Ui/Select";

const CategoryFilter = ({ categories, onFilterChange, value }) => {
  const options = categories.map((cat) => ({
    value: cat.id,
    label: cat.name,
  }));

  const handleChange = (e) => {
    const val = e.target.value;
    onFilterChange(val === "" ? null : parseInt(val));
  };

  return (
    <Select
      value={value}
      options={options}
      onChange={handleChange}
      defaultLabel="Toutes les catégories"
      className="w-full"
    />
  );
};

export default CategoryFilter;
