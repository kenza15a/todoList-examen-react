
// components/Forms/TaskForm.jsx
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

  useEffect(() => {
    if (type === "edit" && initialData) {
      setTask(initialData.description || "");
      setSelectedCategory(initialData.category?.id || "");
    }
  }, [initialData, type]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && selectedCategory) {
      onSubmit({
        ...initialData,
        description: task,
        category_id: parseInt(selectedCategory),
      });
      if (type === "create") {
        setTask("");
        setSelectedCategory("");
      }
      if (onClose) onClose();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-4 w-full flex flex-col gap-2 md:flex-row"
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nouvelle tâche"
        className="border-[#767676] border-[1px] rounded-sm w-full p-2"
      />
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
      <Button
        buttonText={type === "edit" ? "Modifier" : "Ajouter"}
        onClick={handleSubmit}
      />
    </form>
  );
};

export default TaskForm;
