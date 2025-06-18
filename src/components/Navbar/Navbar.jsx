import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../Button/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-[#1F2937] text-white shadow-md px-4 py-3 md:px-8 flex justify-between items-center sticky top-0 z-50">
      <a href="/" className="text-xl font-bold italic text-white">
        Mes Tâches
      </a>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 items-center font-medium">
        <li>
          <Button
          buttonText="Ajouter une tâche"
            onClick={() => scrollTo("tasksForm")}
            className="bg-[#28A745] hover:bg-green-600 px-4 py-2 rounded-md transition"
          >
            Ajouter une tâche
          </Button>
        </li>
        <li>
          <button
            onClick={() => scrollTo("categoriesSection")}
            className="hover:underline hover:text-gray-300 transition-all"
          >
            Catégories
          </button>
        </li>
      </ul>

      {/* Mobile Toggle Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-[#1F2937] px-6 py-4 md:hidden z-50">
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
