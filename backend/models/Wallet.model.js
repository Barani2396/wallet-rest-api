const mongoose = require('mongoose');
const Category = require('./Category')

const walletSchema = mongoose.Schema({
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true, enum: Object.values(Category) }
}, 
{ timestamps: true, });

module.exports = mongoose.model('Wallet', walletSchema);