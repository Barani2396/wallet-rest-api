const express = require('express');
const color = require('colors');
const dotenv = require('dotenv').config();
const WalletRoutes = require('./routes/Wallet.routes');
const { ErrorHandler } = require('./middleware/Error.middleware');
const port = process.env.PORT || 3000;
const connectDB = require('./config/db.conf');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', WalletRoutes);

app.use(ErrorHandler);

app.listen(port, () => { console.log(`Server started on port ${port}`); });