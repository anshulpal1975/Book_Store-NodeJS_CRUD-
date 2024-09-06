
const express = require('express');
const { createBook, getBooks, updateBook, deleteBook } = require('../controllers/bookController'); 

const router = express.Router();

// Define routes
router.get('/', getBooks);        // GET all books
router.post('/', createBook);     // POST a new book
router.put('/:id', updateBook);   // PUT update a book by ID
router.delete('/:id', deleteBook);// DELETE a book by ID

module.exports = router;
