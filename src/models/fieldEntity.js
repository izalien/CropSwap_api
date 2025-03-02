const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
    _id: { 
        type: "ObjectId", 
        required: true
    },
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
    },
    crop: {
        type: String,
        required: true
    }
});

const Field = mongoose.model('Field', fieldSchema);

module.exports = Field;