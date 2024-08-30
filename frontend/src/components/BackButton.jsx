import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center  transition-colors"
      >
        <BsArrowLeft className="text-2xl mr-2" />
        Back
      </button>
    </div>
  );
};

export default BackButton;
