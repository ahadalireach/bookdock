import express from "express";
import {
  getAllBooks,
  postBook,
  getBook,
  updateBook,
  deleteBook,
  getBookByTitle,
  getBookByAuthor,
} from "../controllers/bookController.js";

const router = express.Router();

router.route("/").post(postBook).get(getAllBooks);
router.route("/book/:id").get(getBook).put(updateBook).delete(deleteBook);
router.route("/books/title/:title").get(getBookByTitle);
router.route("/books/author/:author").get(getBookByAuthor);

export default router;
