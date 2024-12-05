import React from "react";

const TasksList = ({ tasks, onDeleteTask, onToggleTask }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(index)}
          />
          <span className={task.completed ? "line-through" : ""}>
            {task.task} ({task.category})
          </span>
          <button onClick={() => onDeleteTask(index)} className="btn-delete">
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
