//Dependencies
const express = require("express");
const router = express.Router();
const controller = require("./controller");

//Redirections
router.get("/" , controller.home);

module.exports = router;