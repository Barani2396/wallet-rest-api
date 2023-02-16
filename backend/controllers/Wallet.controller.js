const asyncHandler = require('express-async-handler');
const Wallet = require('../models/Wallet.model');

// @desc Get wallet
// @route Get /api/wallet
// access Private
const getRecords = asyncHandler(async (req, res) => {
    const wallets = await Wallet.find();

    res.status(200).json(wallets);
});

// @desc Set new record to wallet
// @route Post /api/wallet
// access Private
const addRecord = asyncHandler(async (req, res) => {
    if(!req.body) {
        res.status(400)
        throw new Error('Please add a record to the wallet');
    }

    const record = await Wallet.create({
        title: req.body.title,
        amount: req.body.amount,
        category: req.body.category
    });

    res.status(200).json(record);
});

// @desc Update wallet records
// @route Put /api/wallet/:id
// access Private
const updateRecord = asyncHandler(async (req, res) => {
    const record = await Wallet.findById(req.params.id);

    if(!record) {
        res.status(400);
        throw new Error('Record not found'); 
    }

    const updatedrecord = await Wallet.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedrecord);
});

// @desc Delete a wallet record
// @route Delete /ap/wallet/:id
// access Private
const deleteRecord = asyncHandler(async (req, res) => {
    const record = await Wallet.findById(req.params.id);

    if(!record) {
        res.status(400);
        throw new Error('Record not found');
    }

    const deletedRecord = await record.remove()

    res.status(200).json({deletedRecord: deletedRecord});
});

module.exports = { getRecords, addRecord, updateRecord, deleteRecord };