const express = require("express");
const router = express.Router();
const path = require('path');
const Portfolio = require("../controllers/contact-controller.js");

router.route("/contact")
    .post(Portfolio);

router.route("/welcome")
    .get((req,res)=>{
        res.send("Welcome to my Backend Server");
    });
module.exports = router;