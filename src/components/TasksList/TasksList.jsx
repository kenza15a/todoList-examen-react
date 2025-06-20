import React, { useState } from "react";
import Modal from "../Modal/Modal";
import TaskForm from "../Forms/TaskForm";
import TaskItem from "../TaskItem/TaskItem";

const TasksList = ({
  tasks,
  onDeleteTask,
  onToggleTask,
  onUpdateTask,
  categories,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const openModal = (task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setTaskToEdit(null);
    setIsModalOpen(false);
  };

  const handleEditSubmit = async (updatedTask) => {
    await onUpdateTask(taskToEdit.id, updatedTask);
    closeModal();
  };

  if (tasks.length === 0) {
    return <p>Aucune tâche</p>;
  }

  return (
    <>
      <ul className="w-full flex flex-col gap-4">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggleTask}
            onEdit={openModal}
            onDelete={onDeleteTask}
          />
        ))}
      </ul>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <TaskForm
            type="edit"
            onSubmit={handleEditSubmit}
            categories={categories}
            initialData={taskToEdit}
          />
        </Modal>
      )}
    </>
  );
};

export default TasksList;
