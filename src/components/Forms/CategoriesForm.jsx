import React, { useState } from "react";
import Button from "../Ui/Button/Button";

const CategoriesForm = ({ onAddCategory }) => {
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation frontend
    if (!category.trim()) {
      setError("Le nom de la catégorie est requis.");
      return;
    }

    try {
      await onAddCategory(category.trim());
      setCategory("");
      setError("");
    } catch (err) {
      // Gestion des erreurs renvoyées par l'API
      if (typeof err === "object" && err.name) {
        setError(err.name[0]); // Affiche le premier message d'erreur pour "name"
      } else {
        setError("Une erreur est survenue.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex flex-col md:flex-row gap-4 w-full"
    >
      <div className="w-full flex flex-col">
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Nouvelle catégorie"
          className="border-[#767676] border-[1px] rounded-sm p-2"
        />
        {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
      </div>
      <div className="flex items-end">
        <Button buttonText="Ajouter une catégorie" type="submit" />
      </div>
    </form>
  );
};

export default CategoriesForm;
