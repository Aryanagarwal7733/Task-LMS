// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const { getBooks, addBook, deleteBook } = require('../controllers/bookController');
const auth = require('../middleware/auth');

router.get('/', getBooks);
router.post('/', auth, addBook);
router.delete('/:id', auth, deleteBook);

module.exports = router;
