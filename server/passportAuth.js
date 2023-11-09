const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { User } = require("./model");

// middleware function

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:4000/auth/google/callback",
            scope: ['https://www.googleapis.com/auth/userinfo.profile', 'email']
        },
        async (req, accessToken, refreshToken, profile, done) => {
            try {

                const existingUser = await User.findOne({
                    email: profile.emails[0].value,
                });
                if (existingUser) {
                    return done(null, existingUser);
                } else {
                    const newUser = new User({
                        googleId: profile.id,
                        email: profile.emails[0].value,
                        firstName: profile.name.givenName, // Get the user's first name
                        lastName: profile.name.familyName,
                    });
                    try {
                        await newUser.save();
                        done(null, newUser);
                    } catch (error) {
                        console.error(error);
                        done(error);
                    }

                }
            } catch (error) {
                console.log(error)
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});
