const express = require('express')
const Room = require('../models/room')
const router = new express.Router()

router.post('/room', async (req, res) => {
    var room = new Room(req.body)

    try {
        await room.save()
        res.status(201).send(room)
    } catch (e) {
        res.status(400).send(e)
    }
    console.log(room)
})

module.exports = router