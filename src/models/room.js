const mongoose = require('mongoose')


const roomSchema = new mongoose.Schema({
    hotel_id :{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    capacity:{
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true
    },
    availability:{
        type: Boolean,
        required: true
    },
    occupied_dates:{
        type:[],
        required:true
    }
})

const Room = mongoose.model('Room', roomSchema)

module.exports = Room