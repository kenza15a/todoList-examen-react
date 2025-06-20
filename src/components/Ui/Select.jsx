import React from "react";

const Select = ({
  className,
  options = [],
  onChange,
  defaultLabel = "Toutes",
  value,
}) => {
  return (
    <select
      className={`select my-4 border-[#767676] border-[1px] rounded-md p-2 ${className}`}
      onChange={onChange}
      value={value}
    >
      <option value="">{defaultLabel}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
