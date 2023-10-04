const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    firstName: {
        type: String,
        index: true,
    },
    lastName: {
        type: String,
        index: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;