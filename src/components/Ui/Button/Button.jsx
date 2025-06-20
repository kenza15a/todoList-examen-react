import React from "react";
import clsx from "clsx";
const Button = ({ className, buttonText, buttonType, ...props }) => {
  return (
    <button
      className={clsx("hover:scale-105 hover:scroll-smooth ease-in-out w-max px-4 text-nowrap p-2 rounded-sm text-white bg-[#28A745]", className)}
      type={buttonType}
      {...props}
      onClick={props.onClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
