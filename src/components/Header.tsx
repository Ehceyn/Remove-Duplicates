import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  // Initialize the useNavigate hook
  const navigate = useNavigate();

  // Go back to the previous page
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="sticky inset-x-0 top-0 h-16 w-full flex items-center px-4 sm:px-[70px] mb-8 shadow-sm bg-white">
      <button
        onClick={goBack}
        className="border border-pink-500 text-pink-500 rounded-md px-4 py-2 font-medium hover:bg-pink-500 hover:text-white"
      >
        Back
      </button>
    </div>
  );
};

export default Header;
