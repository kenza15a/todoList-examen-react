import React from "react";
import Button from "../Button/Button";

const TasksList = ({ tasks, onDeleteTask, onToggleTask }) => {
  return tasks.length === 0 ? (
    <p>aucune tâche</p>
  ) : (
    <ul className=" w-full flex flex-col gap-4 ">
      {tasks.map((task, index) => (
        <li key={index} className="p-2 flex flex-row justify-between border-[#DDDDDD] border-[1px] rounded-sm w-full   font-bold">
          <div className="flex flex-row gap-4 items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(index)}
          />
          <span className={task.completed ? "line-through text-[#DDDDDD] " : ""}>
            {task.task} <span className="ml-4 italic">({task.category})</span>
          </span>
          </div>
          <Button buttonText="Supprimer" onClick={() => onDeleteTask(index)} />
          
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
