const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    },
    mobile: {
        type: Number,
        required: true,
    }

})

const User = mongoose.model('User', userSchema)

module.exports = User