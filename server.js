// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fieldController = require('./src/controllers/fieldController');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(fieldController);
const port = 3000;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});