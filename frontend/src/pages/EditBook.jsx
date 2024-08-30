import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton, Spinner } from "../components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditBook = () => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    publishedYear: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!bookData.title) newErrors.title = "Title is required";
    if (!bookData.author) newErrors.author = "Author is required";
    if (!bookData.publishedYear) {
      newErrors.publishedYear = "Published year is required";
    } else if (!/^\d{4}$/.test(bookData.publishedYear)) {
      newErrors.publishedYear = "Invalid year format. Use YYYY.";
    } else if (
      parseInt(bookData.publishedYear, 10) > new Date().getFullYear()
    ) {
      newErrors.publishedYear = "Year cannot be in the future";
    }
    return newErrors;
  };

  const getBookData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:4000/book/${id}`);
      setBookData(response.data);
    } catch (error) {
      console.error("Failed to fetch book data:", error);
      toast.error("Failed to fetch book data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getBookData();
    } else {
      toast.error("Invalid book ID. Redirecting to home page.");
      navigate("/");
    }
  }, [id, navigate]);

  const postUpdatedBook = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    try {
      await axios.put(`http://localhost:4000/book/${id}`, bookData);
      toast.success("Book updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Failed to update book:", error);
      toast.error("Failed to update book. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen p-4">
      <div className="w-full max-w-md bg-white border border-gray-300 rounded-xl shadow-lg p-6">
        <BackButton />
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6 mt-4">
          Edit Book
        </h1>
        {isLoading ? (
          <div className="flex justify-center mb-6">
            <Spinner />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="my-4">
              <label className="block text-lg font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Rich Dad, Poor Dad"
                value={bookData.title}
                onChange={handleInput}
                className={`border ${
                  errors.title ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title}</p>
              )}
            </div>
            <div className="my-4">
              <label className="block text-lg font-medium text-gray-700">
                Author
              </label>
              <input
                type="text"
                name="author"
                placeholder="Robert Kiyosaki"
                value={bookData.author}
                onChange={handleInput}
                className={`border ${
                  errors.author ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.author && (
                <p className="text-red-500 text-sm">{errors.author}</p>
              )}
            </div>
            <div className="my-4">
              <label className="block text-lg font-medium text-gray-700">
                Published Year
              </label>
              <input
                type="text"
                name="publishedYear"
                placeholder="1997"
                value={bookData.publishedYear}
                onChange={handleInput}
                className={`border ${
                  errors.publishedYear ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.publishedYear && (
                <p className="text-red-500 text-sm">{errors.publishedYear}</p>
              )}
            </div>
            <button
              className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg mt-6  transition-colors disabled:opacity-50"
              onClick={postUpdatedBook}
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update Book"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditBook;
