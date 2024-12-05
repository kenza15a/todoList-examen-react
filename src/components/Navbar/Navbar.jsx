// components/Navbar.js
import React from "react";

function Navbar() {
  return (
    <nav className=" py-2  bg-[#1F2937] shadow-md text-white flex flex-row justify-around   md:justify-between px:4 md:px-2">
      <a href="/" className="style-none cursor-pointer">
        <h3 className="text-white font-bold text-lg italic ">Mes taches</h3>
      </a>
      <ul className="list-none flex flex-row gap-4 items-center justify-center  text-white">
        <li className="cursor-pointer hover:scale-105 hover:transition-transformp p-2 bg-[#28A745] rounded-md font-semibold ">
          <a href="#tasksForm" >Ajouter des taches !</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
