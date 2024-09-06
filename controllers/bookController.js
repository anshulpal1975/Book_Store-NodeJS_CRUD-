const Book = require('../models/Book');

// Create a new book
const createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: 'Error creating book', error });
  }
};


const getBooks = async (req, res) => {
  try {
    const { title, author, genre, page = 1, limit = 10 } = req.query;

    // Build query object for filtering
    let query = {};

    if (title) {
      query.title = { $regex: title, $options: 'i' }; // Case-insensitive search
    }

    if (author) {
      query.author = { $regex: author, $options: 'i' }; // Case-insensitive search
    }

    if (genre) {
      query.genre = genre;
    }

    // Pagination settings
    const skip = (page - 1) * limit;
    const books = await Book.find(query)
      .limit(Number(limit))
      .skip(skip)
      .exec();

    const count = await Book.countDocuments(query);

    res.status(200).json({
      books,
      totalPages: Math.ceil(count / limit),
      currentPage: Number(page),
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
};


// Update a book by ID
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: 'Error updating book', error });
  }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting book', error });
  }
};



// Export all functions
module.exports = {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
};
