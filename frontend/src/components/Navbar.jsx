import React from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md fixed w-full top-0 z-50">
      <button onClick={() => navigate("/")} aria-label="Home">
        <img src={logo} alt="Book Dock Logo" className="h-10" />
      </button>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate("/book/create")}
          className="flex items-center text-blue-500 hover:text-blue-600 transition-colors duration-200"
          aria-label="Add Book"
        >
          <MdOutlineAddBox className="text-4xl mr-2" />
          <span className="text-lg font-medium">Add Book</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
