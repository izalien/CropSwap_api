const express = require('express');
const router = express.Router();
const Crop = require('../models/cropEntity');

router.get('/crops/getAll', async (req, res) => {
    try {
        const crops = await Crop.find().sort({ name: 1 });
        res.status(200).json({
            status: 'success',
            results: crops.length,
            data: {
                crops
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
});

module.exports = router;