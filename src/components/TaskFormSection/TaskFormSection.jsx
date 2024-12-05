import React, { useState } from "react";
import CategoriesForm from "../Forms/CategoriesForm";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import TasksForm from "../Forms/TasksForm";
import TasksList from "../TasksList/TasksList";
import tasksData from "../../data/tasks";
const TaskFormSection = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [categories, setCategories] = useState(["Work", "Home", "Leisure"]);
  const [filter, setFilter] = useState("");
  const addCategory = (category) => setCategories([...categories, category]);

  const addTask = (newTask) => setTasks([...tasks, newTask]);

  const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks =
    filter === "" ? tasks : tasks.filter((task) => task.category === filter);

  return (
    <section
      id="#tasksForm"
      name="tasksForm"
      className="  flex flex-col md:gap-4 gap-12  items-center justify-center py-12 min-h-max w-[80vw] md:w-[50vw] "
    >
      <h1 className="font-bold text-xl text-center">
        Ma To-Do List par Catégories
      </h1>
      <CategoriesForm onAddCategory={addCategory} />
      <CategoryFilter categories={categories} onFilterChange={setFilter} />
      <TasksForm onAddTask={addTask} categories={categories} />
      <TasksList
        tasks={filteredTasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
      />
    </section>
  );
};

export default TaskFormSection;
