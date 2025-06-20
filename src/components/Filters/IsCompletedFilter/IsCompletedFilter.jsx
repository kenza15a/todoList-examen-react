import React from "react";
import Select from "../../Ui/Select";

const IsCompletedFilter = ({ value, onChange }) => {
  const options = [
    { value: "true", label: "Terminées" },
    { value: "false", label: "Non terminées" },
  ];

  const handleChange = (e) => {
    const val = e.target.value;
    onChange(val === "" ? null : val);
  };

  return (
    <Select
      value={value ?? ""}
      options={options}
      onChange={handleChange}
      defaultLabel="Toutes les tâches"
      className="w-full md:w-auto"
    />
  );
};

export default IsCompletedFilter;
