const mongoose = require("mongoose");



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONOGODB_URL)
        console.log("MongoDB connection Successfully".bgGreen.black)
    } catch (error) {
        console.log(error)

    }
}

module.exports = connectDB;