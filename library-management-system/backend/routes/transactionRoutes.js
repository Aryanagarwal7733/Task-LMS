// routes/transactionRoutes.js
const express = require('express');
const router = express.Router();
const { getTransactions, createTransaction } = require('../controllers/transactioncontroller');
const auth = require('../middleware/auth');

router.get('/', auth, getTransactions);
router.post('/', auth, createTransaction);

module.exports = router;
