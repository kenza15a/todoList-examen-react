import { useState, useEffect } from "react";
import Button from "../Ui/Button/Button";

const TaskForm = ({
  onSubmit,
  categories,
  type = "create",
  initialData = {},
  onClose,
}) => {
  const [task, setTask] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (type === "edit" && initialData) {
      setTask(initialData.description || "");
      setSelectedCategory(initialData.category?.id || "");
    }
  }, [initialData, type]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation simple côté client
    if (!task.trim()) newErrors.description = "La description est obligatoire.";
    if (!selectedCategory) newErrors.category_id = "Choisissez une catégorie.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await onSubmit({
        ...initialData,
        description: task.trim(),
        category_id: parseInt(selectedCategory),
      });

      // Clear form on create
      if (type === "create") {
        setTask("");
        setSelectedCategory("");
      }

      setErrors({});
      if (onClose) onClose();
    } catch (err) {
      // Gestion des erreurs du backend (ex: champ manquant)
      if (err && typeof err === "object") {
        setErrors(err);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-4 w-full flex flex-col gap-2 md:flex-row flex-wrap"
    >
      <div className="w-full md:w-[60%] flex flex-col">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Nouvelle tâche"
          className="border-[#767676] border-[1px] rounded-sm w-full p-2"
        />
        {errors.description && (
          <p className="text-sm text-red-600 mt-1">{errors.description}</p>
        )}
      </div>

      <div className="w-full md:w-[30%] flex flex-col">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border-[#767676] border-[1px] rounded-sm w-full p-2 font-bold italic"
        >
          <option value="">
            {categories.length === 0
              ? "Ajouter une catégorie"
              : "Choisissez une catégorie"}
          </option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        {errors.category_id && (
          <p className="text-sm text-red-600 mt-1">{errors.category_id}</p>
        )}
      </div>

      <div className="w-full md:w-auto flex justify-center items-end">
        <Button
          buttonText={type === "edit" ? "Modifier" : "Ajouter"}
          type="submit"
        />
      </div>
    </form>
  );
};

export default TaskForm;
