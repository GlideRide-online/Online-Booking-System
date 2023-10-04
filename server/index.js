const express = require("express");
const colors = require("colors");
const app = express();
const connectDB = require("./db")
require('dotenv').config();
var cors = require('cors')
const passport = require("passport");
const session = require("express-session")
require("./passportAuth")


//Connect MongoDB
connectDB();
app.use(cors())

// Initialize Passport and session management
app.use(session({
    secret: 'cats',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }
}))
app.use(passport.initialize());
app.use(passport.session());



//testing the route
app.get("/api/v1", (req, res) => {
    res.status(200).json({ message: "Welcome" })
})

//google authentication route using partport js
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}))

app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/',
        successRedirect: "http://localhost:3000/book-ride"
    }),

);

app.get("/thankyou", (req, res) => {
    res.status(200).json({ message: "logged in succesfully" })
})


//listening on the port number 3000
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server Running on ${port}`.bgBlue)
})
