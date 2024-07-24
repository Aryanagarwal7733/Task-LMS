// controllers/transactionController.js
const Transaction = require('../models/transaction');
const Book = require('../Book');

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate('user').populate('book');
    res.json(transactions);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.createTransaction = async (req, res) => {
  const { user, book, dueDate, transactionType } = req.body;
  try {
    const transaction = new Transaction({ user, book, dueDate, transactionType });
    await transaction.save();

    const updatedBook = await Book.findById(book);
    updatedBook.available = transactionType === 'returned';
    await updatedBook.save();

    res.json(transaction);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
