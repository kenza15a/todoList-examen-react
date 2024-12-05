import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TaskFormSecion from "../components/TaskFormSection/TaskFormSecion";


const HomePage = () => {
  
  return (
    <div className=" flex flex-col min-h-screen">
      <Navbar />
      <main className="bg-white flex-grow w-full justify-center items-center flex">
        <TaskFormSecion/>
       
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
/* const HomePage = () => {
    const [tasks, setTasks] = useState([]);
    const [categories, setCategories] = useState([]);
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
      <div className="app">
        <h1>Ma To-Do List par Catégories</h1>
        <CategoriesForm onAddCategory={addCategory} />
        <CategoryFilter categories={categories} onFilterChange={setFilter} />
        <TasksForm onAddTask={addTask} categories={categories} />
        <TasksList
          tasks={filteredTasks}
          onDeleteTask={deleteTask}
          onToggleTask={toggleTask}
        />
      </div>
    );
  };
  
  export default HomePage;
   */