import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton, Spinner } from "../components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteBook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const deleteBook = async () => {
    setIsLoading(true);
    try {
      await axios.delete(`http://localhost:4000/book/${id}`);
      toast.success("Book deleted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Failed to delete the book:", error);
      toast.error("Failed to delete book. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen p-4">
      <div className="w-full max-w-md bg-white border border-gray-300 rounded-xl shadow-lg p-6">
        <BackButton />
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6 mt-4">
          Delete Book
        </h1>
        {isLoading && (
          <div className="flex justify-center mb-6">
            <Spinner />
          </div>
        )}
        <div className="flex flex-col items-center space-y-6">
          <h3 className="text-xl text-center text-gray-700">
            Are you sure you want to delete this book?
          </h3>
          <div className="flex gap-4">
            <button
              className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              onClick={deleteBook}
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Yes, Delete It"}
            </button>
            <button
              className="py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
