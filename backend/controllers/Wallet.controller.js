const asyncHandler = require('express-async-handler');

// @desc Get wallet
// @route Get /api/wallet
// access Private
const getRecords = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get wallet'});
})

// @desc Set new record to wallet
// @route Post /api/wallet
// access Private
const addRecord = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field');
    }
    res.status(200).json({message: 'Set wallet'});
})

// @desc Update wallet records
// @route Put /api/wallet/:id
// access Private
const updateRecord = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update wallet id ${req.params.id}`});
})

// @desc Delete a wallet record
// @route Delete /ap/wallet/:id
// access Private
const deleteRecord = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete wallet id ${req.params.id}`});
})

module.exports = { getRecords, addRecord, updateRecord, deleteRecord };