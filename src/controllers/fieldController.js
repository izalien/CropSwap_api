const express = require('express');
const router = express.Router();
const Field = require('../models/fieldEntity');

router.get('/fields/getAll', async (req, res) => {
    try {
        const fields = await Field.find();
        res.status(200).json({
            status: 'success',
            results: fields.length,
            data: {
                fields
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