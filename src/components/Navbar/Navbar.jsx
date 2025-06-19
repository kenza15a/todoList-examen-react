import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../Button/Button";

const Navbar = ({ onSearchChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearchChange(value); // lift to parent
  };

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-[#1F2937] text-white shadow-md px-4 py-3 md:px-8 sticky top-0 z-50 w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        {/* Top row */}
        <div className="flex justify-between items-center">
          <a href="/" className="text-xl font-bold italic text-white">
            Mes Tâches
          </a>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Search bar - Always visible */}
        <div className="w-full md:w-auto mt-2 md:mt-0">
          <input
            type="text"
            placeholder="Rechercher tâche ou catégorie..."
            value={search}
            onChange={handleSearchChange}
            className="w-full md:w-64 rounded px-3 py-1 text-black border border-gray-300 focus:outline-none"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center font-medium">
          <Button
            buttonText="Ajouter une tâche"
            onClick={() => scrollTo("tasksForm")}
            className="bg-[#28A745] hover:bg-green-600 px-4 py-2 rounded-md transition"
          />
          <button
            onClick={() => scrollTo("categoriesSection")}
            className="hover:underline hover:text-gray-300 transition-all"
          >
            Catégories
          </button>
        </div>
      </div>

      {/* Mobile Drawer (excluding search) */}
      {isOpen && (
        <div className="mt-4 md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <Button
                buttonText="Ajouter une tâche"
                onClick={() => scrollTo("tasksForm")}
                className="w-full text-left bg-[#28A745] px-4 py-2 rounded hover:bg-green-600"
              />
            </li>
            <li>
              <Button
                onClick={() => scrollTo("categoriesSection")}
                buttonText="Catégories"
                className="w-full text-left hover:underline"
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
