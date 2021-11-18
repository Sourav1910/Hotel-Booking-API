const mongoose = require('mongoose')


const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true  
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    rating:{
        type: Number,
        required: true
    }
})

const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel