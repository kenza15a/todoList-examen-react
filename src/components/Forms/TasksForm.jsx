import { useState } from "react";
import Button from "../Button/Button";

const TasksForm = ({ onAddTask, categories }) => {
  const [task, setTask] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && selectedCategory) {
      onAddTask({ task, category: selectedCategory, completed: false });
      setTask("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 w-full flex flex-col gap-2 md:flex-row "
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nouvelle tâche"
        className=" border-[#767676] border-[1px] rounded-sm w-full p-2 "
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border-[#767676] border-[1px] rounded-sm w-full p-2  font-bold italic"
      >
        <option value="">
          {categories.length === 0
            ? "Ajouter une catégorie"
            : "choisissez une categorie"}
        </option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <Button buttonText="Ajouter" onClick={handleSubmit} />
    </form>
  );
};
export default TasksForm;
