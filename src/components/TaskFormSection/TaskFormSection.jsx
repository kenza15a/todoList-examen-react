import React, { useEffect, useState } from "react";
import CategoriesForm from "../Forms/CategoriesForm";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import TasksForm from "../Forms/TasksForm";
import TasksList from "../TasksList/TasksList";

import {
  getTasks,
  getCategories,
  createTask,
  deleteTask,
  updateTask,
  createCategory,
} from "../../uils/apiServices";
import Button from "../Button/Button";
const TaskFormSection = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [displayForm, setDisplayForm] = useState(false);
  const handleDisplayForm = () => {
    setDisplayForm(!displayForm);
  };
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const tasksData = await getTasks(filter);
      setTasks(tasksData);
    } catch (err) {
      console.error(err);
      setError("Erreur lors du chargement des tâches.");
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
        setError("Erreur lors du chargement des catégories.");
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [filter]);

  const handleAddCategory = async (name) => {
    try {
      const newCategory = await createCategory({ name });
      setCategories([...categories, newCategory]);
    } catch (err) {
      console.error(err);
      setError("Erreur lors de l'ajout de la catégorie.");
    }
  };

  const handleAddTask = async (task) => {
    try {
      await createTask(task);
      fetchTasks(); // recharge avec filtre actif
    } catch (err) {
      console.error(err);
      setError("Erreur lors de l'ajout de la tâche.");
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      fetchTasks();
    } catch (err) {
      console.error(err);
      setError("Erreur lors de la suppression de la tâche.");
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
      setError("Erreur lors de la mise à jour de la tâche.");
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
        Ma To-Do List par Catégories
      </h1>

      <CategoryFilter
        categories={categories}
        onFilterChange={(value) => setFilter(value)}
      />

      <TasksList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
      <section
        id="tasksForm"
        className="flex flex-col gap-4  w-full"
      >
        <Button buttonText="Ajouter une tâche" onClick={handleDisplayForm} className="mx-auto"/>
        {displayForm && (
          <div className="flex flex-col gap-4 ">
            <CategoriesForm onAddCategory={handleAddCategory} />
            <TasksForm onAddTask={handleAddTask} categories={categories} />
          </div>
        )}
      </section>
    </section>
  );
};

export default TaskFormSection;
