import React, { useEffect, useState } from "react";
import axios from "axios";
import { BooksCard, BooksTable, Spinner } from "../components";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [filteredType, setFilteredType] = useState("title");
  const [searchText, setSearchText] = useState("");
  const [booksType, setBooksType] = useState("table");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchBooks = async () => {
    setIsLoading(true);
    try {
      const url = searchText
        ? `https://bookdock-web.vercel.app/api/books/${filteredType}/${searchText}`
        : "https://bookdock-web.vercel.app/api/";
      const res = await axios.get(url);
      setBooks(res.data.data || []);
    } catch (error) {
      console.error("Error fetching books:", error);
      toast.error("Failed to fetch books. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [filteredType, searchText]);

  return (
    <div className="p-6 bg-gray-100 flex flex-col">
      <div className="p-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-4">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-4 md:mb-0">
            <input
              type="text"
              placeholder={`Search by ${filteredType}`}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
            />
            <select
              value={filteredType}
              onChange={(e) => setFilteredType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
            >
              <option value="title">Title</option>
              <option value="author">Author</option>
            </select>
            <button
              onClick={fetchBooks}
              className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors w-full md:w-auto"
            >
              Search
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button
              className={`px-6 py-2 text-white rounded-lg transition-colors duration-300 w-full md:w-auto ${
                booksType === "table"
                  ? "bg-blue-600 scale-105 shadow-lg"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
              onClick={() => setBooksType("table")}
            >
              Table View
            </button>
            <button
              className={`px-6 py-2 text-white rounded-lg transition-colors duration-300 w-full md:w-auto ${
                booksType === "card"
                  ? "bg-blue-600 scale-105 shadow-lg"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
              onClick={() => setBooksType("card")}
            >
              Card View
            </button>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center flex-grow mt-52">
          <Spinner />
        </div>
      ) : books.length === 0 ? (
        <div className="flex flex-col justify-center items-center flex-grow space-y-4 text-center mt-40">
          <p className="text-xl font-semibold text-gray-500">
            No books available that match the specified criteria. Please check
            back later.
          </p>
          <button
            onClick={() => navigate("/book/create")}
            className="px-8 py-3 text-white text-lg font-semibold bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          >
            Post Now
          </button>
        </div>
      ) : booksType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
