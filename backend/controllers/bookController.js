import { Book } from "../models/bookModel.js";

// Add Book
export const postBook = async (req, res, next) => {
  try {
    const { title, author, publishedYear } = req.body;

    if (!title || !author || !publishedYear) {
      return res
        .status(400)
        .json({ message: "Title, author, and published year are required." });
    }

    const newBook = new Book({
      title,
      author,
      publishedYear,
    });

    const book = await newBook.save();
    res.status(201).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

// Get All Books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({ count: books.length, data: books });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};

// Get Books By Title
export const getBookByTitle = async (req, res) => {
  try {
    const { title } = req.params;

    // Create a case-insensitive regular expression to match the title
    const regex = new RegExp(title, "i");

    // Use the regex in the query to find books where the title matches partially
    const books = await Book.find({ title: { $regex: regex } });

    res.status(200).json({ data: books });
  } catch (error) {
    console.error("Error in getBookByTitle:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Get Book By Author
export const getBookByAuthor = async (req, res) => {
  try {
    const { author } = req.params;

    const regex = new RegExp(author, "i");
    const books = await Book.find({ author: { $regex: regex } });

    res.status(200).json({ data: books });
  } catch (error) {
    console.error("Error in getBookByAuthor:", error.message);
    res.status(500).json({ error: error.message });
  }
};

// Get Single Book
export const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ message: "Book not found." });
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};

// Update Book
export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    const { title, author, publishedYear } = req.body;

    if (!title || !author || !publishedYear) {
      return res
        .status(400)
        .json({ message: "Title, author, and published year are required." });
    }

    const updateBook = await Book.findByIdAndUpdate(id, {
      title,
      author,
      publishedYear,
    });
    if (!updateBook)
      return res.status(404).json({ message: "Book not found." });
    res.status(200).json(updateBook);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};

// Delete Book
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.findByIdAndDelete(id);
    if (!deleteBook)
      return res.status(404).json({ message: "Book not found." });
    res.status(200).json({ message: "Book deleted successfully." });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
