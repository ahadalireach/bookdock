import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PostBook, DeleteBook, EditBook, Home, BookInfo } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/create" element={<PostBook />} />
          <Route path="/book/detail/:id" element={<BookInfo />} />
          <Route path="/book/edit/:id" element={<EditBook />} />
          <Route path="/book/delete/:id" element={<DeleteBook />} />
        </Routes>
      </main>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default App;
