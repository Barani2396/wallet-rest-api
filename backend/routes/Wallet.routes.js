const express = require('express');
const router = express.Router();
const { getRecords, addRecord, updateRecord, deleteRecord } = require('../controllers/Wallet.controller');

router.route('/wallet').get(getRecords).post(addRecord);

router.route('/wallet/:id').put(updateRecord).delete(deleteRecord);

module.exports = router;