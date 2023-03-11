const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors')
const passportSetup = require('./passport');
const authRoute =  require('./routes/auth');

const app = express();
app.use(
    cookieSession({
    name: "session",
    keys: ["rakeshroshan"],
    maxAge: 24 *60 * 60 *1000
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: 'https://localhost:3000',
    methods: "GET,PUT,POST,DELETE",
    credentials: true
}));

app.use("/auth", authRoute);

app.listen("5000", () => {
    console.log(`server is running at 5000`);
});