const express = require('express');
const router = express.Router();
const Field = require('../models/fieldEntity');
const Grow = require('../models/growEntity');

router.post('/grows/create', async (req, res) => {
    try {
        const newField = await Field.insertOne(req.body.field);
        const newGrow = await Grow.insertOne({
            season: req.body.season,
            field: newField,
            crop: req.body.crop
        });
        res.status(200).json({
            status: 'success',
            results: newGrow.length,
            data: {
                newGrow
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
});

router.get('/grows/getAllCurrent', async (req, res) => {
    try {
        const grows = await Grow.find(req.params);
        res.status(200).json({
            status: 'success',
            results: grows.length,
            data: {
                grows
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