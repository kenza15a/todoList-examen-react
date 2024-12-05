import React from "react";

const Footer = () => {
  return (
    <footer
      name="footer"
      id="footer"
      className="bg-[#28A745] text-white flex flex-col gap-2 items-center justify-center py-12 h-8 max-h-[10vh] font-bold"
    >
      <p className="text-center text-sm mx-auto">
        Contactez le dev : Kenza.filali.rahal@gmail.com
      </p>
      <p className="text-center text-sm mx-auto">
        © 2024 Mes taches. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
