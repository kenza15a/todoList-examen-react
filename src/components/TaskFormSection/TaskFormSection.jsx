import React, { useEffect, useState } from "react";
import CategoriesForm from "../Forms/CategoriesForm";
import CategoryFilter from "../Filters/CategoryFilter/CategoryFilter";
import TaskForm from "../Forms/TaskForm";
import TasksList from "../TasksList/TasksList";
import Button from "../Ui/Button/Button";
import Modal from "../Modal/Modal";
import {
  getTasks,
  getCategories,
  createTask,
  deleteTask,
  updateTask,
  createCategory,
} from "../../uils/apiServices";
import IsCompletedFilter from "../Filters/IsCompletedFilter/IsCompletedFilter";

const TaskFormSection = ({ searchTerm }) => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState(null);
  const [filterCompleted, setFilterCompleted] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const tasksData = await getTasks({
        category: filterCategory,
        is_completed: filterCompleted,
        search: searchTerm,
      });
      setTasks(tasksData);
    } catch (err) {
      console.error(err);
      setError("Erreur lors du chargement des taches.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (err) {
        console.error(err);
        setError("Erreur lors du chargement des catégorie.");
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchTasks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterCategory, filterCompleted, searchTerm]);

  const handleAddCategory = async (name) => {
    try {
      const newCategory = await createCategory({ name });
      setCategories([...categories, newCategory]);
    } catch (err) {
      console.error(err);
      setError("Erreur lors de l'ajout de la catégorie.");
    }
  };

  const handleCreateTask = async (task) => {
    try {
      await createTask(task);
      fetchTasks();
      setIsCreateModalOpen(false);
    } catch (err) {
      console.error(err);
      setError("Erreur lors de l'ajout de la tache.");
    }
  };

  const handleUpdateTask = async (taskId, updatedData) => {
    try {
      await updateTask(taskId, updatedData);
      fetchTasks();
    } catch (err) {
      console.error(err);
      setError("Erreur lors de la mise a jour de la tache.");
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      fetchTasks();
    } catch (err) {
      console.error(err);
      setError("Erreur lors de la suppression de la tache.");
    }
  };

  const handleToggleTask = async (task) => {
    try {
      await updateTask(task.id, {
        is_completed: !task.is_completed,
      });
      fetchTasks();
    } catch (err) {
      console.error(err);
      setError("Erreur lors de la mise a jour de la tache.");
    }
  };

  if (loading) return <p>Chargement...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <section
      id="tasksForm"
      className="flex flex-col md:gap-6 gap-12 items-center justify-center py-12 min-h-max w-[70vw] md:w-[60vw]"
    >
      <h1 className="font-bold text-xl text-center">
        Ma To-Do List par catégorie
      </h1>

      <div className="flex flex-col md:flex-row gap-4 w-full">
        <CategoryFilter
          categories={categories}
          onFilterChange={setFilterCategory}
        />

        <IsCompletedFilter
          value={filterCompleted}
          onChange={setFilterCompleted}
        />
      </div>

      <TasksList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
        categories={categories}
        onUpdateTask={handleUpdateTask}
      />

      <div className="flex justify-center gap-4">
        <Button
          buttonText="Ajouter une tâche"
          onClick={() => setIsCreateModalOpen(true)}
        />
        <Button
          buttonText="Ajouter une catégorie"
          onClick={() => setIsCategoryModalOpen(true)}
          className="bg-blue-600"
        />
      </div>

      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      >
        <TaskForm
          type="create"
          onSubmit={handleCreateTask}
          categories={categories}
        />
      </Modal>
      <Modal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
      >
        <CategoriesForm
          onAddCategory={(name) => {
            handleAddCategory(name);
            setIsCategoryModalOpen(false);
          }}
        />
      </Modal>
    </section>
  );
};

export default TaskFormSection;
