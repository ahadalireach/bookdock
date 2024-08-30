import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const BooksTable = ({ books }) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg border-separate border-spacing-0">
        <thead>
          <tr>
            <th className="p-4 bg-gray-200 text-left text-sm font-medium text-gray-700 border-b border-gray-300">
              No
            </th>
            <th className="p-4 bg-gray-200 text-left text-sm font-medium text-gray-700 border-b border-gray-300">
              Title
            </th>
            <th className="p-4 bg-gray-200 text-left text-sm font-medium text-gray-700 border-b border-gray-300 hidden md:table-cell">
              Author
            </th>
            <th className="p-4 bg-gray-200 text-left text-sm font-medium text-gray-700 border-b border-gray-300 hidden md:table-cell">
              Published Year
            </th>
            <th className="p-4 bg-gray-200 text-left text-sm font-medium text-gray-700 border-b border-gray-300">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr
              key={book._id}
              className="hover:bg-gray-50 transition-colors duration-150"
            >
              <td className="p-4 text-sm text-gray-600">{index + 1}</td>
              <td className="p-4 text-sm text-gray-600">{book.title}</td>
              <td className="p-4 text-sm text-gray-600 hidden md:table-cell">
                {book.author}
              </td>
              <td className="p-4 text-sm text-gray-600 hidden md:table-cell">
                {book.publishedYear}
              </td>
              <td className="p-4 text-sm text-gray-600">
                <div className="flex space-x-4">
                  <button
                    onClick={() => navigate(`/book/detail/${book._id}`)}
                    className="text-green-600 hover:text-green-800 transition-colors duration-150"
                    title="View Details"
                  >
                    <BsInfoCircle className="text-xl" />
                  </button>
                  <button
                    onClick={() => navigate(`/book/edit/${book._id}`)}
                    className="text-yellow-600 hover:text-yellow-800 transition-colors duration-150"
                    title="Edit Book"
                  >
                    <AiOutlineEdit className="text-xl" />
                  </button>
                  <button
                    onClick={() => navigate(`/book/delete/${book._id}`)}
                    className="text-red-600 hover:text-red-800 transition-colors duration-150"
                    title="Delete Book"
                  >
                    <MdOutlineDelete className="text-xl" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
