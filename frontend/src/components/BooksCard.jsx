import React, { useState } from "react";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiShow, BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { BookModal } from "../components";

const BooksCard = ({ books }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-4">
      {books.map((book) => (
        <div
          key={book._id}
          className="relative border border-gray-300 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
        >
          <span className="absolute top-2 right-2 px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">
            {book.publishedYear}
          </span>
          <h4 className="text-gray-500 text-sm mb-3">{book._id}</h4>
          <div className="flex items-center gap-x-2 mb-2">
            <PiBookOpenTextLight className="text-red-500 text-2xl" />
            <h2 className="text-lg font-bold text-gray-800">{book.title}</h2>
          </div>
          <div className="flex items-center gap-x-2 mb-4">
            <BiUserCircle className="text-red-500 text-2xl" />
            <h3 className="text-md font-medium text-gray-600">{book.author}</h3>
          </div>
          <div className="flex justify-between items-center">
            <BiShow
              className="text-3xl text-blue-500 hover:text-blue-600 cursor-pointer transition-colors duration-200"
              onClick={() => setShowModal(true)}
              title="View Details"
            />
            <button
              onClick={() => navigate(`/book/detail/${book._id}`)}
              className="text-2xl text-green-600 hover:text-green-800 transition-colors duration-200"
              title="View Details"
            >
              <BsInfoCircle />
            </button>
            <button
              onClick={() => navigate(`/book/edit/${book._id}`)}
              className="text-2xl text-yellow-600 hover:text-yellow-800 transition-colors duration-200"
              title="Edit Book"
            >
              <AiOutlineEdit />
            </button>
            <button
              onClick={() => navigate(`/book/delete/${book._id}`)}
              className="text-2xl text-red-600 hover:text-red-800 transition-colors duration-200"
              title="Delete Book"
            >
              <MdOutlineDelete />
            </button>
          </div>
          {showModal && (
            <BookModal book={book} onClose={() => setShowModal(false)} />
          )}
        </div>
      ))}
    </div>
  );
};

export default BooksCard;
