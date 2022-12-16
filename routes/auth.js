const { sign } = require("crypto");
const express = require("express");

const { signup, login } = require("../controllers/auth.js");

const router = express.Router();

router.post("/signup", signup); // here i was stuck then prashant kumar (BRIQ); fixed it i was missing handler signup and signin
router.post("/login", login);

module.exports = router;
