const mongoose = require('mongoose');
const { json } = require('express/lib/response');

const growSchema = new mongoose.Schema({
    season: {
        type: Number,
        required: true     
    },
    field: {
        type: {
            _id: {
                type: mongoose.Schema.Types.ObjectId,
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
            }
        },
        required: true
    },
    crop: {
        type: {
            name: {
                type: String,
                required: true
            },
            maxSeasons: {
                type: Number,
                required: true
            }
        },
        required: false
    }
});

const Grow = mongoose.model('Grow', growSchema);

module.exports = Grow;