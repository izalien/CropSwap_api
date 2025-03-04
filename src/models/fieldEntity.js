const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true     
    },
    size: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

const Field = mongoose.model('Field', fieldSchema);

module.exports = Field;