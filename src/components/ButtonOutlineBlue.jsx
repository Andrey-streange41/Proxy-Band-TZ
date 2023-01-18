import React from "react";

const ButtonOutlineBlue = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        `py-3 rounded-md px-16 border hover:bg-blue-500
       hover:text-white font-bold cursor-pointer hover:shadow-lg ` + className
      }
    >
      {children}
    </button>
  );
};

export default ButtonOutlineBlue;
