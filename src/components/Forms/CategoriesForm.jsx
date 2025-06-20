import React, { useState } from "react";
import Button from "../Ui/Button/Button";

const CategoriesForm = ({ onAddCategory }) => {
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category) {
      onAddCategory(category);
      setCategory("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex flex-col md:flex-row gap-4 w-full h-10"
    >
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Nouvelle catégorie"
        className=" border-[#767676] border-[1px] rounded-sm w-full p-2 "
      />
      <Button buttonText="Ajouter une catégorie" onClick={handleSubmit} />
    </form>
  );
};
export default CategoriesForm;
