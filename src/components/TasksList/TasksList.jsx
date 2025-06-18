import React from "react";
import Button from "../Button/Button";

const TasksList = ({ tasks, onDeleteTask, onToggleTask }) => {
  if (tasks.length === 0) {
    return <p>aucune tâche</p>;
  }

  return (
    <ul className="w-full flex flex-col gap-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="p-2 flex flex-row justify-between border-[#DDDDDD] border-[1px] rounded-sm w-full font-bold"
        >
          <div className="flex flex-row gap-4 items-center">
            <input
              type="checkbox"
              checked={task.is_completed}
              onChange={() => onToggleTask(task)}
            />
            <span
              className={task.is_completed ? "line-through text-[#DDDDDD]" : ""}
            >
              {task.description}{" "}
              <span className="ml-4 italic">
                ({task.category?.name || "Sans catégorie"})
              </span>
            </span>
          </div>
          <Button
            buttonText="Supprimer"
            onClick={() => onDeleteTask(task.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
