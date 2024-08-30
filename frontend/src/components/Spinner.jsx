import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin h-16 w-16 border-4 border-t-4 border-sky-600 border-solid rounded-full"></div>
    </div>
  );
};

export default Spinner;
