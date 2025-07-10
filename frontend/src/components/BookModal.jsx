import React from "react";
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FaRegCalendarAlt, FaRegCalendarCheck } from "react-icons/fa";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-white bg-opacity-100 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-lg bg-white rounded-lg p-6 relative shadow-lg overflow-auto"
      >
        <AiOutlineClose
          className="absolute top-4 right-4 text-2xl text-red-600 cursor-pointer hover:text-red-800 transition-colors duration-200"
          onClick={onClose}
        />
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white bg-red-500 rounded-lg px-4 py-1">
            {book.publishedYear}
          </h2>
        </div>
        <div className="flex items-center gap-x-2 mt-4">
          <PiBookOpenTextLight className="text-red-500 text-2xl" />
          <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
        </div>
        <div className="flex items-center gap-x-2 mt-2">
          <BiUserCircle className="text-red-500 text-2xl" />
          <h3 className="text-lg text-gray-700">{book.author}</h3>
        </div>
        <div className="mt-6">
          <div className="flex items-center gap-x-2">
            <FaRegCalendarAlt className="text-gray-700 text-xl" />
            <div>
              <p className="text-gray-600 mt-1">
                <span className="text-gray-700 font-bold">ID: </span> {book._id}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-x-2">
            <FaRegCalendarCheck className="text-gray-700 text-xl" />
            <div>
              <p className="text-gray-600 mt-1">
                <span className="text-gray-700 font-bold">Created Date: </span>
                {new Date(book.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-x-2">
            <FaRegCalendarCheck className="text-gray-700 text-xl" />
            <div>
              <p className="text-gray-600 mt-1">
                <span className="text-gray-700 font-bold">Updated At: </span>
                {new Date(book.updatedAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
