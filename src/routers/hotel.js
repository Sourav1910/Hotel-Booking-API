const express = require('express')
const Hotel = require('../models/hotel')
const router = new express.Router()

router.post('/hotel', async (req, res) => {
    const hotel = new Hotel(req.body)

    try {
        await hotel.save()
        res.status(201).send(hotel)
    } catch (e) {
        res.status(400).send(e)
    }
    console.log(req.body)
})

module.exports = router