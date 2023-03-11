const Router = require('express').Router();
const passport = require('passport');

const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';

Router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "successful",
            user: req.user,
            //cookies: req.cookies
        });
    }
});

Router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "failure",
    })
});

Router.get("/logout", (req, res) => { 
    req.logout();
    req.redirect(CLIENT_URL);
})

Router.get("/google", passport.authenticate('google', { scope: ['profile'] }));

Router.get("/google/callback", passport.authenticate('google',
    {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed"
}));

module.exports = Router;