// controllers/bookController.js
const Book = require('../Book');

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.addBook = async (req, res) => {
  const { name, author } = req.body;
  try {
    const newBook = new Book({ name, author });
    const book = await newBook.save();
    res.json(book);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Book removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
