import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TaskFormSection from "../components/TaskFormSection/TaskFormSection";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onSearchChange={(term) => setSearchTerm(term)} />
      <main className="bg-white flex-grow w-full justify-center items-center flex">
        <TaskFormSection searchTerm={searchTerm} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
