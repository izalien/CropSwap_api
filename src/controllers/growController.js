const express = require('express');
const router = express.Router();
const Field = require('../models/fieldEntity');
const Grow = require('../models/growEntity');

router.post('/grows/createNew', async (req, res) => {
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

router.post('/grows/createFromExisting', async (req, res) => {
    try {
        const newGrow = await Grow.insertOne({
            season: req.body.season,
            field: req.body.field,
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
        const grows = await Grow.find({season: req.query.season});
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

router.post('/grows/remove', async (req, res) => {
    try {
        const query = {_id: req.body}
        await Grow.deleteMany(query);
        res.status(200).json({
            status: 'success',
        })
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
});

router.get('/grows/getAll', async (req, res) => {
    try {
        const grows = await Grow.find();
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