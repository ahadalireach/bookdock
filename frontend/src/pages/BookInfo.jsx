import React, { useEffect, useState } from "react";
import { BackButton, Spinner } from "../components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookInfo = () => {
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://localhost:4000/book/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error("Failed to fetch book data:", error);
        toast.error("Failed to fetch book data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (isLoading) {
    return (
      <div className="p-4 flex flex-col items-center mt-52">
        <Spinner />
      </div>
    );
  }

  if (!book) {
    return (
      <div className="flex justify-center items-center h-screen p-4">
        <div className="text-center">
          <BackButton />
          <h1 className="text-3xl font-semibold text-red-600 mt-4">
            Book Not Found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen p-4">
      <div className="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow-md p-6">
        <BackButton />
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6 mt-4">
          Book Details
        </h1>
        <div className="space-y-4">
          <div className="flex justify-between p-2 border-b border-gray-300">
            <span className="text-lg font-medium text-gray-600">ID:</span>
            <span className="text-gray-800">{book._id}</span>
          </div>
          <div className="flex justify-between p-2 border-b border-gray-300">
            <span className="text-lg font-medium text-gray-600">Title:</span>
            <span className="text-gray-800">{book.title}</span>
          </div>
          <div className="flex justify-between p-2 border-b border-gray-300">
            <span className="text-lg font-medium text-gray-600">Author:</span>
            <span className="text-gray-800">{book.author}</span>
          </div>
          <div className="flex justify-between p-2 border-b border-gray-300">
            <span className="text-lg font-medium text-gray-600">
              Publish Year:
            </span>
            <span className="text-gray-800">{book.publishedYear}</span>
          </div>
          <div className="flex justify-between p-2 border-b border-gray-300">
            <span className="text-lg font-medium text-gray-600">
              Created At:
            </span>
            <span className="text-gray-800">
              {new Date(book.createdAt).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between p-2">
            <span className="text-lg font-medium text-gray-600">
              Last Updated At:
            </span>
            <span className="text-gray-800">
              {new Date(book.updatedAt).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
