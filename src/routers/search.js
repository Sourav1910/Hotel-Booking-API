const express = require('express')
const Hotel = require('../models/hotel')
const Room = require('../models/room')
const router = new express.Router()

//Search for hotels using location sent in the request body
router.get('/search', async (req, res) => {  
    try {
        const hotels = await Hotel.find({location: req.body.location })
        res.status(201).send(hotels)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
    
})

//Search for rooms within the hotel with hotel_id
router.get('/search/:hotel_id', async (req, res) => {
    console.log(req.params.hotel_id)
    
    try {
        const rooms = await Room.find({hotel_id:req.params.hotel_id })
        res.status(201).send(rooms)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
    
})

module.exports = router