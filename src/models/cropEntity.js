const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    maxSeasons: {
        type: Number,
        required: true
    }
});

const Crop = mongoose.model('Crops', cropSchema);

module.exports = Crop;