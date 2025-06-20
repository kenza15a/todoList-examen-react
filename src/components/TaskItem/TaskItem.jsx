// components/TaskItem.jsx
import React from "react";
import Button from "../Ui/Button/Button";

const TaskItem = ({ task, onToggle, onEdit, onDelete }) => (
  <li className="p-2 flex flex-col sm:flex-row justify-between gap-2 border border-[#DDDDDD] rounded-sm font-bold">
    <div className="flex gap-4 items-center">
      <input
        type="checkbox"
        checked={task.is_completed}
        onChange={() => onToggle(task)}
      />
      <span className={task.is_completed ? "line-through text-[#DDDDDD]" : ""}>
        {task.description}
        <span className="ml-2 italic">
          ({task.category?.name || "Sans catégorie"})
        </span>
      </span>
    </div>
    <div className="flex gap-2">
      <Button
        buttonText="Modifier"
        onClick={() => onEdit(task)}
        className="bg-blue-600"
      />
      <Button buttonText="Supprimer" onClick={() => onDelete(task.id)} />
    </div>
  </li>
);

export default TaskItem;
