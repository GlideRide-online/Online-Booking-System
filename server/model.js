const mongoose = require("mongoose");
// model for saving the user from google passportjs
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

// to save the boolean value
const booleanDataSchema = new mongoose.Schema({
    booleanValue: Boolean, // A field to store the boolean value
});

const User = mongoose.model('User', userSchema);
const BooleanData = mongoose.model('BooleanData', booleanDataSchema);


module.exports = User;
module.exports = BooleanData;