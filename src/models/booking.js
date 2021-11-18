const mongoose = require('mongoose')


const bookingSchema = new mongoose.Schema({
    room_id :{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    user_id :{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    date_of_booking:{
        type: Date,
        required: true
    },
    arrival_date:{
        type: Date,
        required: true
    },
    departure_date:{
        type: Date,
        required: true
    },
    amount:{
        type: Number,
        required: true
    }
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking