const express = require("express");
const colors = require("colors");
const app = express();
const connectDB = require("./db");
require("dotenv").config();
var cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const jwt = require("jsonwebtoken");
require("./passportAuth");
const router = require("express").Router();
const paymentRoute = require("./payment");
const { BooleanData } = require("./model");

//Connect MongoDB
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// razorpay Integration

app.use("/api/checkout/", paymentRoute);

// Initialize Passport and session management
app.use(
    session({
        secret: "cats",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: true },
    })
);
app.use(passport.initialize());
app.use(passport.session());

//testing the route
app.get("/api/v1", (req, res) => {
    res.status(200).json({ message: "Welcome" });
});

//google authentication route using partport js
app.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
);
app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/",
        session: false,
    }),
    (req, res) => {
        const user = req.user;
        if (user) {
            const token = jwt.sign({ user }, "your-secret-key", { expiresIn: "1h" });
            res.redirect(`http://localhost:3000/book-ride?token=${token}`);
        } else {
            console.log("user not found");
        }
    }
);

// route for disable/activate ui
app.post("/updateUi", async (req, res) => {
    const { booleanValue } = req.body;
    try {
        const query = {};
        const update = { booleanValue };
        const options = { upsert: true, new: true, setDefaultsOnInsert: true };

        const updatedData = await BooleanData.findOneAndUpdate(
            query,
            update,
            options
        );
        res.status(200).send({ message: "Updated" });
    } catch (error) {
        console.error("Error fetching boolean value from the database:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

//route for get the boolean value
app.get("/getBooleanValue", async (req, res) => {
    const booleanData = await BooleanData.findOne();
    if (booleanData) {
        res.json({ booleanValue: booleanData.booleanValue });
    } else {
        // If no data is found, set a default value (e.g., false) and return it
        res.json({ booleanValue: false });
    }

})

//listening on the port number 3000
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server Running on ${port}`.bgBlue);
});
